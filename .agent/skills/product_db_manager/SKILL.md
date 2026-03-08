---
name: product_db_manager
description: Busca productos y clientes en una base de datos local (CSV).
---

# Product DB Manager Skill

Esta skill permite contrastar descripciones de productos para encontrar sus códigos internos y códigos de proveedor.

## Uso

```python
from scripts.db_lookup import ProductDB

db = ProductDB("database.csv")
match = db.find_product("Gabardina 8 oz")
# Retorna los códigos si hay coincidencia
```
