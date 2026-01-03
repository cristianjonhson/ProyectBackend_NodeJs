# ProyectBackend_NodeJs

Backend API desarrollado con Node.js y Express que proporciona servicios para consultar información de puntos de recogida desde la API de AllRide. Este proyecto fue desarrollado como desafío técnico para el proceso de selección al cargo de Desarrollador Backend - Septiembre 2021.

## 📋 Descripción

Este proyecto es una aplicación backend construida con Node.js que actúa como intermediario entre un cliente y la API externa de AllRide. Proporciona endpoints para consultar datos de puntos de recogida con autenticación mediante Bearer Token.

### Características principales

- API REST con Express.js
- Integración con API externa de AllRide
- Soporte CORS para peticiones cross-origin
- Desarrollo con hot-reload mediante Nodemon
- Peticiones HTTP con Axios y Request

## 🚀 Tecnologías

El proyecto está desarrollado con las siguientes tecnologías:

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| [Node.js](https://nodejs.org/) | - | Entorno de ejecución de JavaScript |
| [Express](https://expressjs.com/) | ^4.17.1 | Framework web para Node.js |
| [Axios](https://axios-http.com/) | ^0.21.4 | Cliente HTTP basado en promesas |
| [CORS](https://github.com/expressjs/cors) | ^2.8.5 | Middleware para habilitar CORS |
| [Request](https://github.com/request/request) | ^2.88.2 | Cliente HTTP simplificado |
| [Nodemon](https://nodemon.io/) | ^2.0.12 | Herramienta de desarrollo con hot-reload |

## 📁 Estructura del Proyecto

```
ProyectBackend_NodeJs/
│
├── index.js              # Archivo principal del servidor
├── package.json          # Dependencias y configuración del proyecto
├── package-lock.json     # Versiones exactas de dependencias
└── README.md            # Documentación del proyecto
```

## ⚙️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 12 o superior)
- **npm** (viene incluido con Node.js)
- Un editor de código (se recomienda Visual Studio Code o IntelliJ IDEA)

### Verificar instalación de Node.js

```bash
node -v
npm -v
```

## 🔧 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/cristianjonhson/ProyectBackend_NodeJs.git
cd ProyectBackend_NodeJs
```

### 2. Instalar dependencias

```bash
npm install
```

## 🏃‍♂️ Ejecución

### Modo desarrollo (con hot-reload)

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

### Modo producción

```bash
node index.js
```

## 📡 Endpoints Disponibles

### `GET /`
Endpoint de prueba que devuelve un mensaje de bienvenida.

**Respuesta:**
```
Hola mundo
```

### `GET /server`
Realiza una petición a la API externa de AllRide para obtener información de puntos de recogida.

**Headers requeridos:** Ninguno (la autenticación se maneja internamente)

**Respuesta:** Datos de puntos de recogida desde la API de AllRide

## 🔐 Configuración

### Variables de Entorno

Actualmente, el token de autenticación está hardcodeado en el código. Para un entorno de producción, se recomienda:

1. Crear un archivo `.env` en la raíz del proyecto
2. Agregar las siguientes variables:

```env
PORT=3000
ALLRIDE_API_URL=https://stage.allrideapp.com/ext/api/v1/recruiting/points
ALLRIDE_BEARER_TOKEN=tu_token_aqui
```

3. Instalar `dotenv`:
```bash
npm install dotenv
```

4. Modificar `index.js` para usar variables de entorno

## 🛠️ Mejoras Sugeridas

- [ ] Implementar variables de entorno para configuración
- [ ] Agregar manejo de errores robusto
- [ ] Implementar logging con Winston o Morgan
- [ ] Agregar pruebas unitarias y de integración
- [ ] Documentar API con Swagger/OpenAPI
- [ ] Implementar rate limiting
- [ ] Agregar validación de datos con Joi o Express Validator

## 👨‍💻 Autor

**Cristian Jonhson Alvarez**

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 🔗 Enlaces

- [Repositorio](https://github.com/cristianjonhson/ProyectBackend_NodeJs)
- [Reportar un bug](https://github.com/cristianjonhson/ProyectBackend_NodeJs/issues)

---

⌨️ Desarrollado con ❤️ por [Cristian Jonhson Alvarez](https://github.com/cristianjonhson)

http://localhost:3000/server

```


## Autor ✒️

* **Cristian Jonhson Alvarez** - *Desarrollo y Documentación* - [cristianjonhson](https://github.com/cristianjonhson)



## Expresiones de Gratitud 🎁

* Agradezco a las personas encargadas de este desafio que confiaron en mis capacidades y talento para desarrollar este nuevo repositorio 🤓

* Recomiendo realizar este proyecto a los demás desarrolladores como metodo de prueba y de ingenio. Soy todo oido a sus preguntas 📢





---
⌨️ con ❤️ por [cristianjonhson](https://github.com/cristianjonhson) 😊
