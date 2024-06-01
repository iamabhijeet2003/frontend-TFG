# Frontend - Tienda Online

Este repositorio contiene el código fuente del frontend de la Tienda Online de mi TFG(Trabajo de Fin de Grado) de Ciclo Superior de DAW(Desarrollo de aplicaciones web). La aplicación está desarrollada con Vue.js y otras tecnologías modernas para ofrecer una experiencia de usuario fluida y atractiva.
El TFG esta repartido en 3 repositorios diferentes.
1. [Frontend - Tienda (Este Repositorio)](https://github.com/iamabhijeet2003/frontend-TFG.git)
2. [Frontend - Admin Panel](https://github.com/iamabhijeet2003/admin-TFG.git)
3. [Backend - API](https://github.com/iamabhijeet2003/backend-TFG.git)

## Características

- Navegación fluida con Vue Router.
- Interfaz de usuario responsiva y estilizada con Tailwind CSS y Bootstrap 5.
- Gestión de estado centralizada con Vuex.
- Validación de formularios con VeeValidate.
- Autocompletado de direcciones con Google Maps API.
- Integración con la API de Stripe para procesamiento de pagos.
- Uso de Axios para realizar peticiones HTTP.
- Notificaciones y mensajes de toast con Toastify.

## Despliegue
Este aplicación esta desplegada en Vercel. Puedes ver la pagina en el siguiente enlace:
[DEMO](https://proyecto-final-abhi.vercel.app)

## Requisitos

- Node.js >= 20.x
- npm >= 10.x

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/iamabhijeet2003/frontend-TFG.git
   cd frontend-TFG
   ```
2. Instala las dependencias:
   ```bash
    npm i
   ```
## Configuración
Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno:
  ```bash
  VUE_GOOGLE_MAPS_API_KEY=your_api_key
  ```
## Desarrollo
Para iniciar el servidor de desarrollo, ejecuta:
```bash
npm run serve
```
Esto lanzará la aplicación en http://localhost:8080.

## Despliegue
Para generar una versión optimizada para producción, ejecuta:
```bash
npm run build
```
Los archivos generados estarán en la carpeta dist, listos para ser desplegados en un servidor web.

## Estructura del Proyecto
```
frontend-tienda-online/
├── public/                  # Archivos públicos
├── src/
│   ├── assets/              # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── components/          # Componentes de Vue reutilizables
│   ├── layouts/             # Componentes de diseño/layout
│   ├── router/              # Configuración de rutas
│   ├── store/               # Gestión de estado con Vuex
│   ├── utils/               # Utilidades y helpers
│   ├── views/               # Vistas de la aplicación
│   ├── App.vue              # Componente raíz de la aplicación
│   └── main.js              # Punto de entrada de la aplicación
├── .env                     # Variables de entorno
├── .gitignore               # Archivos y carpetas ignorados por Git
├── babel.config.js          # Configuración de Babel
├── package.json             # Dependencias y scripts del proyecto
└── vue.config.js            # Configuración de Vue CLI
```

## Contribuir
Las contribuciones son bienvenidas. Por favor, lee el archivo CONTRIBUTING.md para más detalles sobre cómo contribuir a este proyecto.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto
Si tienes preguntas o necesitas ayuda, por favor abre un issue en GitHub.

¡Gracias por tu interés en el proyecto!
