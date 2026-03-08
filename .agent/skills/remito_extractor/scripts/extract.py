import re
import sys
import json
from pypdf import PdfReader

def extract_text_from_pdf(pdf_path):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        print(f"DEBUG: Texto bruto extraído (primeros 200 caracteres):\n{text[:200]}...")
        return text
    except Exception as e:
        print(f"Error al leer PDF {pdf_path}: {e}")
        return ""

def extract_remito_data(text):
    data = {
        "cuit_remitente": None,
        "items": []
    }
    
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    
    # Extraer CUIT
    cuit_match = re.search(r'(\d{2}-\d{8}-\d{1})', text)
    if cuit_match:
        data["cuit_remitente"] = cuit_match.group(1)

    # Buscar items. 
    # La lógica anterior era muy rígida. Ahora buscaremos patrones de:
    # DESCRIPCION (texto) + VALORES NUMERICOS (piezas, kilos, metros)
    
    # Intentar capturar bloques de productos. 
    # Buscamos líneas que NO sean encabezados puros pero que contengan texto descriptivo.
    # Luego buscamos números en la misma línea o siguientes.
    
    # Ignorar bloques comunes de encabezado/pie de página para la búsqueda de items
    content_area = text
    header_end = text.find("DESCRIPCION")
    if header_end != -1:
        content_area = text[header_end:]
        
    # Patrón: Texto descriptivo seguido de números (piezas, kilos, metros)
    # Ejemplo: Gabardina 8 oz ALGODÓN 100%NEGRO N001 7 240,70 549,00
    # Ejemplo: NATURAL C136 22 440,85 0,00JERSEY 24/1 PEINADO
    
    # Buscamos líneas que contengan texto y terminen o sigan con números
    item_pattern = re.compile(r'([A-ZÁÉÍÓÚÑ0-9\s%/-]{5,})\s+(\d+)\s+([\d.,-]+)\s+([\d.,-]+)', re.IGNORECASE)
    
    matches = item_pattern.finditer(content_area)
    for match in matches:
        desc_raw = match.group(1).strip()
        piezas = match.group(2).strip()
        kilos = match.group(3).strip()
        metros = match.group(4).strip()
        
        # Limpiar descripción de restos de encabezados si se colaron
        for h in ["DESCRIPCION", "COLOR", "PIEZAS", "KILOS", "METROS", "CODIGO"]:
            desc_raw = re.sub(h, "", desc_raw, flags=re.IGNORECASE).strip()
        
        if len(desc_raw) > 3:
            data["items"].append({
                "descripcion": desc_raw,
                "piezas": piezas,
                "kilos": kilos,
                "metros": metros
            })

    # Si no encontramos nada con el patrón robusto, intentar un fallback 
    # por si las piezas/kilos están en líneas separadas pero cerca
    if not data["items"]:
        print("DEBUG: Usando lógica de fallback para extracción")
        for i, line in enumerate(lines):
            if any(h in line.upper() for h in ["DESCRIPCIÓN", "DESCRIPCION", "COLOR", "CÓDIGO", "CODIGO", "METROS", "KILOS", "PIEZAS"]):
                continue
            if len(line) > 5 and not re.match(r'^[\d.,\s\-/]+$', line) and line.upper() != "REMITO":
                piezas = "0"
                kilos = "0"
                for j in range(1, 4):
                    if i + j < len(lines):
                        next_line = lines[i+j]
                        if re.match(r'^\d+$', next_line): piezas = next_line
                        elif re.match(r'^[\d.,]+$', next_line): kilos = next_line
                
                if piezas != "0" or kilos != "0":
                    data["items"].append({
                        "descripcion": line,
                        "piezas": piezas,
                        "kilos": kilos,
                        "metros": "0"
                    })
    
    print(f"DEBUG: Items detectados: {len(data['items'])}")
    return data

if __name__ == "__main__":
    # Si se pasa texto por stdin o archivo... aquí lo simplificamos para prueba
    if len(sys.argv) > 1:
        # Mock de carga de archivo si fuera necesario, pero lo usaremos importado
        pass
