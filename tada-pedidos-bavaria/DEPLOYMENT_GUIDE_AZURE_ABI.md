# Guía de Publicación y Despliegue Corporativo: Portal Pedidos TaDa Bavaria (AB InBev)

Esta guía detalla paso a paso cómo publicar y poner en producción la plataforma web de **Pedidos TaDa** dentro de la infraestructura tecnológica oficial de **Bavaria / AB InBev Colombia**, garantizando el cumplimiento de todas las directrices de seguridad, control de dominios y compatibilidad con los sistemas existentes.

---

## 1. Arquitectura de la Solución

```
+-------------------------------------------------------------------------------+
|                             USUARIOS BAVARIA / TADA                           |
|       Correos autorizados: @ab-inbev.com  |  -ext@ab-inbev.com                |
+---------------------------------------+---------------------------------------+
                                        | (HTTPS / SSL Seguro)
                                        v
+-------------------------------------------------------------------------------+
|                       AZURE STATIC WEB APPS / APP SERVICE                     |
|                   URL Corporativa: pedidos.tada.bavaria.co                    |
|                                                                               |
|  - Hosting Estático Ultrarrápido (HTML5 / Vanilla CSS / Vanilla JS)           |
|  - staticwebapp.config.json (Políticas de Seguridad, CSP y Headers)          |
|  - Módulos: Pedidos Hielo, IAI, Centralizados, CTMs, Calendario, Novedades    |
+-------------------+---------------------------------------+-------------------+
                    |                                       |
                    v                                       v
+---------------------------------------+   +-----------------------------------+
|       MICROSOFT ENTRA ID (AZURE AD)   |   |   MICROSOFT 365 / SHAREPOINT      |
|                                       |   |   & POWER AUTOMATE                |
|  - Single Sign-On (SSO) AB InBev      |   |  - Sincronización de listas       |
|  - Validación de dominios y grupos    |   |  - Notificaciones a Teams/Outlook |
+---------------------------------------+   +-----------------------------------+
```

---

## 2. Métodos de Publicación Recomendados

### Opción A: Despliegue en Azure Static Web Apps (Recomendado por IT AB InBev)
Azure Static Web Apps es la opción recomendada porque:
- Es de costo prácticamente nulo o mínimo con alta disponibilidad (SLA 99.99%).
- Maneja certificados SSL/TLS automáticos.
- Se integra nativamente con Microsoft Entra ID (Azure Active Directory) para que los usuarios no necesiten una nueva contraseña.

#### Pasos de despliegue:
1. Crear el recurso **Static Web App** en el Portal de Azure (`portal.azure.com`) bajo la suscripción de Bavaria Colombia.
2. Conectar el repositorio de GitHub / Azure DevOps de la organización.
3. Configurar los parámetros de build:
   - **App location**: `/`
   - **Api location**: (dejar vacío si es solo frontend)
   - **Output location**: `/`
4. El archivo [staticwebapp.config.json](file:///C:/Users/CO092858/.gemini/antigravity/scratch/tada-pedidos-bavaria/staticwebapp.config.json) ya incluido aplicará automáticamente las reglas de seguridad y redirecciones.

---

### Opción B: Despliegue como SharePoint Framework (SPFx) o Embebido en SharePoint
Si la empresa desea mantener el acceso dentro de la intranet actual de SharePoint (`https://anheuserbuschinbev.sharepoint.com/sites/PedidosTADA`):

1. **Como Página de Sitio Completa (Full Page App)**:
   - Cargar los archivos `index.html`, `css/styles.css`, `js/data.js`, `js/app.js` y `assets/` a la biblioteca de documentos "Estilos y Activos de Sitio" de SharePoint.
   - Crear una página moderna en SharePoint y utilizar el elemento web **Embed** (Incrustar) o desplegar el paquete SPFx Application Customizer apuntando a la URL del index.
2. Los colaboradores accederán con su sesión ya autenticada de Office 365 sin pasos adicionales.

---

## 3. Configuración de Seguridad y Validación de Dominio

### Restricción de Correos Electrónicos
La plataforma incluye validación estricta para asegurar que solo usuarios con dominios corporativos autorizados puedan interactuar con los pedidos:
- Colaboradores directos: `nombre.apellido@ab-inbev.com`
- Contratistas y proveedores externos: `proveedor-ext@ab-inbev.com`

En el archivo [js/app.js](file:///C:/Users/CO092858/.gemini/antigravity/scratch/tada-pedidos-bavaria/js/app.js), la regla de validación está definida como:
```javascript
const strictRegex = /^([a-zA-Z0-9_.+-]+)(|-ext)@ab-inbev\.com$/i;
```

---

## 4. Integración de Datos con SharePoint / Power Automate / SAP

1. **Exportación a Excel**: Todos los módulos (Pedidos de Hielo, IAI, Centralizados) cuentan con el botón **"Exportar Excel / CSV"**, que genera archivos con formato nativo UTF-8 BOM, 100% compatibles con Microsoft Excel en español sin problemas de tildes o caracteres especiales.
2. **Generación de Eventos .ICS**: Al agendar reuniones o comités operativos desde el módulo de Calendario, la aplicación descarga automáticamente el archivo `.ics` para sincronización directa con **Microsoft Outlook y Teams**.
3. **Flujos Automatizados de Power Automate**:
   - Puede configurarse un Webhook / HTTP Endpoint en Power Automate para que al presionar "Confirmar Pedido", se envíe un payload JSON a la lista de SharePoint `Pedidos Hielo 2026` y se notifique al proveedor vía correo y Teams.

---

## 5. Estructura de Archivos del Proyecto

```
C:\Users\CO092858\.gemini\antigravity\scratch\tada-pedidos-bavaria\
├── index.html                   <- Estructura principal y componentes modales
├── staticwebapp.config.json     <- Configuración Azure Static Web Apps & Auth
├── DEPLOYMENT_GUIDE_AZURE_ABI.md<- Manual técnico y de seguridad
├── css/
│   └── styles.css               <- Sistema de diseño oficial TaDa Purple
├── js/
│   ├── data.js                  <- Mock de datos, Dark Stores, CTMs y catálogo IAI
│   └── app.js                   <- Controladores, lógica de pedidos y exportación
└── assets/
    └── tada-magic-banner.jpg    <- Arte visual oficial TaDa Delivery Bavaria
```

---

## 6. Verificación y Pruebas Locales

Para probar la plataforma en cualquier computador sin requerir servidores ni dependencias:
1. Abra el archivo [index.html](file:///C:/Users/CO092858/.gemini/antigravity/scratch/tada-pedidos-bavaria/index.html) directamente en cualquier navegador moderno (Google Chrome, Microsoft Edge, Safari o Firefox).
2. Pruebe el inicio de sesión con cuentas de prueba o ingrese un correo `@ab-inbev.com`.
3. Radique un pedido de hielo con cálculo automático de tarifas y CTMs.
4. Explore el visor oficial de PDFs de contratos CTM.
5. Exporte los reportes a Excel y descargue los eventos para Outlook.
