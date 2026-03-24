---
description: Guía paso a paso para desplegar la landing page Noelia Escamez Estudio en Hostinger
---

# Despliegue en Hostinger (Hosting Compartido)

Esta guía asume que tienes un plan de Hosting Compartido en Hostinger y que ya tienes un dominio vinculado.

## 1. Preparar el proyecto localmente

Antes de subir los archivos, debemos generar la versión de producción optimizada.

1. Abre una terminal en la carpeta del proyecto (`noelia-estudio`).
2. Ejecuta el comando de construcción: `npm run build`
3. Esto creará una carpeta llamada `dist` con todos los archivos necesarios.

## 2. Seleccionar el tipo de sitio en Hostinger

Cuando Hostinger te pregunte qué tipo de sitio quieres crear (como se ve en tu captura):

1. Elige la opción: **Sitio web PHP/HTML personalizado**.
2. Esta es la opción correcta porque ya hemos generado los archivos finales (HTML, CSS y JS) y solo necesitamos un lugar donde "servirlos".

## 3. Acceder al Panel de Control de Hostinger (hPanel)

1. Inicia sesión en [Hostinger](https://www.hostinger.com/).
2. Ve a la sección **Hosting** y haz clic en **Administrar** al lado de tu dominio.
3. Busca la opción **Administrador de Archivos** (File Manager).

## 3. Subir los archivos

1. Dentro del Administrador de Archivos, entra en la carpeta `public_html`.
   - Si ya hay archivos allí (como un `default.php` o `index.php` de Hostinger), puedes borrarlos o moverlos a una carpeta de respaldo.
2. Sube **todo el contenido** de la carpeta local `dist` a la carpeta `public_html` del servidor. 
   - *Nota: Sube los archivos que están DENTRO de `dist`, no la carpeta `dist` en sí.*

## 4. Configuración adicional (SPA Routing)

Aunque es una landing page, si en el futuro agregas rutas de React Router, necesitarás un archivo `.htaccess` para que Hostinger sepa redirigir todo al `index.html`.

1. Crea un archivo llamado `.htaccess` en `public_html` (si no existe).
2. Pega el siguiente código:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## 5. Verificar

1. Visita tu dominio en el navegador.
2. Si ves la landing page correctamente, ¡felicidades! El despliegue ha sido exitoso.

---
**Tip:** También puedes usar **FTP** (FileZilla) si prefieres no usar el Administrador de Archivos web. Los datos de acceso FTP están en la sección **Cuentas FTP** de tu hPanel.
