import csv
import os

class ProductDB:
    def __init__(self, csv_path):
        self.csv_path = csv_path
        self.data = []
        self._load_db()

    def _load_db(self):
        if not os.path.exists(self.csv_path):
            return
        try:
            with open(self.csv_path, mode='r', encoding='utf-8-sig') as f:
                reader = csv.DictReader(f)
                self.headers = reader.fieldnames
                self.col_map = self._map_headers(self.headers)
                for row in reader:
                    self.data.append(row)
        except Exception as e:
            print(f"Error cargando DB: {e}")

    def _map_headers(self, headers):
        mapping = {"desc": None, "id": None, "prov": None, "cuit": None}
        for h in headers:
            h_low = h.lower()
            if any(k in h_low for k in ["descrip", "articulo", "producto"]):
                mapping["desc"] = h
            elif any(k in h_low for k in ["proveed", "prov"]):
                mapping["prov"] = h
            elif any(k in h_low for k in ["interno", "codigo", "id"]):
                if not mapping["id"]: mapping["id"] = h
            elif any(k in h_low for k in ["cuit", "razon", "social"]):
                mapping["cuit"] = h
        return mapping

    def find_product_by_desc(self, description):
        col_desc = self.col_map["desc"]
        col_prov = self.col_map["prov"]
        
        if not col_desc: return None
        
        target_desc = description.lower()
        
        # 1. Intento de coincidencia exacta o parcial en la columna descripción
        for row in self.data:
            db_desc = row.get(col_desc, "").lower()
            if db_desc and (db_desc in target_desc or target_desc in db_desc):
                return self._format_match(row)
        
        # 2. Si falló, intentar buscar fragmentos en todas las columnas relevantes (codigo_proveedor, color, etc.)
        # Esto ayuda cuando el PDF trae "NATURAL C136" y la DB tiene "Natural" en color y "C136" en proveedor
        for row in self.data:
            # Buscar en todas las columnas configuradas
            for key, col_name in self.col_map.items():
                if not col_name: continue
                val = str(row.get(col_name, "")).lower()
                if val and len(val) > 2 and val in target_desc:
                    return self._format_match(row)
                    
        return None

    def _format_match(self, row):
        return {
            "codigo_interno": row.get(self.col_map["id"], "N/A"),
            "codigo_proveedor": row.get(self.col_map["prov"], "N/A"),
            "descripcion_db": row.get(self.col_map["desc"])
        }

    def get_client_by_cuit(self, cuit):
        for row in self.data:
            if row.get("cuit") == cuit:
                return row.get("razon_social")
        return None
