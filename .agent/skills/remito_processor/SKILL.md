---
name: remito_processor
description: Orquestador principal que extrae datos de remito y los cruza con la base de datos.
---

# Remito Processor Skill

Esta skill coordina el flujo completo:
1. Extrae texto del PDF.
2. Identifica CUIT y descripción de productos.
3. Busca códigos en `product_db_manager`.
4. Genera un JSON consolidado.

## Uso

```bash
python .agent/skills/remito_processor/scripts/process_all.py camino/al/remito.pdf
```
