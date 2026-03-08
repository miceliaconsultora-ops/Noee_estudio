import sys
import os
import json

# Agregar los directorios de las skills al path para importar
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from remito_extractor.scripts.extract import extract_remito_data, extract_text_from_pdf
from product_db_manager.scripts.db_lookup import ProductDB

def process_remito(pdf_path, db_path, ocr_text=None):
    if not ocr_text:
        ocr_text = extract_text_from_pdf(pdf_path)
    
    if not ocr_text or ocr_text.strip() == "":
        print(f"ERROR: No se obtuvo texto de {pdf_path}")
        return None
        
    extracted_data = extract_remito_data(ocr_text)
    db = ProductDB(db_path)
    
    final_output = []
    cuit = extracted_data.get("cuit_remitente")
    
    for item in extracted_data.get("items", []):
        desc = item.get("descripcion")
        match = db.find_product_by_desc(desc)
        
        result_item = {
            "cuit_remitente": cuit,
            "codigo_producto": match["codigo_interno"] if match else "NO ENCONTRADO",
            "descripcion_producto": match["descripcion_db"] if match else desc,
            "codigo_proveedor": match["codigo_proveedor"] if match else "NO ENCONTRADO"
        }
        final_output.append(result_item)
    
    # Guardar en archivo JSON
    json_path = os.path.splitext(pdf_path)[0] + ".json"
    try:
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(final_output, f, indent=4, ensure_ascii=False)
        print(f"Resultado guardado en: {json_path}")
    except Exception as e:
        print(f"Error al guardar JSON: {e}")
        
    return final_output

def find_db_file():
    # Buscar el primer archivo CSV disponible si no se pasa uno específico
    for f in os.listdir("."):
        if f.endswith(".csv"):
            return f
    return None

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python process_all.py <pdf_path> [ocr_text o '--'] [db_path]")
        sys.exit(1)
        
    pdf_path = sys.argv[1]
    ocr_text = None
    db_path = None
    
    # Procesar argumentos restantes
    for arg in sys.argv[2:]:
        if arg.lower().endswith(".csv"):
            db_path = arg
        elif arg.strip() != "" and arg != "--":
            ocr_text = arg
            
    # Valores por defecto si no se encontraron en argumentos
    if not db_path:
        db_path = "database.csv"
        if not os.path.exists(db_path):
            db_path = find_db_file()
    
    if not db_path:
        print("Error: No se encontró ningún archivo de base de datos (.csv)")
        sys.exit(1)
        
    print(f"Usando base de datos: {db_path}")
    results = process_remito(pdf_path, db_path, ocr_text)
    if results:
        print(json.dumps(results, indent=4, ensure_ascii=False))
