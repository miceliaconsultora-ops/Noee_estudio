---
name: remito_extractor
description: Extrae datos específicos de un remito en formato PDF (OCR).
---

# Remito Extractor Skill

Esta skill se encarga de procesar el texto extraído de un PDF de remito para identificar campos clave.

## Uso

La skill utiliza el script `extract.py` para procesar el texto.

```python
from scripts.extract import extract_remito_data

data = extract_remito_data(ocr_text)
# Retorna un diccionario con cuit, descripcion, etc.
```

## Campos Extraídos
- CUIT del remitente
- Descripción del producto
- Cantidades (PIEZAS, KILOS, METROS)
