# ProyectBackend_NodeJs

Backend API desarrollado con Node.js y Express que proporciona servicios RESTful para consultar información de usuarios y posts desde la API pública JSONPlaceholder. Este proyecto fue desarrollado como desafío técnico para el proceso de selección al cargo de Desarrollador Backend - Septiembre 2021.

## 📋 Descripción

Este proyecto es una aplicación backend construida con Node.js que actúa como intermediario entre un cliente y la API pública JSONPlaceholder. Proporciona endpoints para consultar datos de usuarios y publicaciones con manejo de errores y respuestas JSON estructuradas.

### Características principales

- API REST con Express.js
- Integración con API pública JSONPlaceholder
- Soporte CORS para peticiones cross-origin
- Desarrollo con hot-reload mediante Nodemon
- Peticiones HTTP con Axios
- Manejo de errores robusto

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
├── .gitignore           # Archivos y directorios ignorados por Git
├── collection.json      # Colección de Postman para pruebas de API
├── index.js             # Archivo principal del servidor
├── package.json         # Dependencias y configuración del proyecto
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

### `GET /users`
Obtiene la lista completa de usuarios desde JSONPlaceholder.

**Respuesta:** Array con todos los usuarios (ID, nombre, email, etc.)

**Ejemplo de respuesta:**
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    ...
  }
]
```

### `GET /posts`
Obtiene todas las publicaciones disponibles.

**Respuesta:** Array con todas las publicaciones

**Ejemplo de respuesta:**
```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident",
    "body": "quia et suscipit..."
  }
]
```

### `GET /posts/:id`
Obtiene una publicación específica por su ID.

**Parámetros:**
- `id` (number) - ID de la publicación

**Respuesta:** Objeto con los datos de la publicación

**Ejemplo:**
```bash
GET /posts/1
```

## 🧪 Pruebas con Postman

El proyecto incluye una colección de Postman (`collection.json`) lista para importar y probar la API.

### Importar la colección

1. Abre Postman
2. Click en **"Import"**
3. Selecciona el archivo `collection.json` del proyecto
4. La colección se importará con los siguientes endpoints:
   - **Health Check** - GET /
   - **Get All Users** - GET /users
   - **Get All Posts** - GET /posts
   - **Get Post by ID** - GET /posts/:id

### Ejecutar las pruebas

Asegúrate de que el servidor esté ejecutándose (`npm run dev`) antes de realizar las peticiones en Postman.

## 🔐 Configuración

### Variables de Entorno

Actualmente, el token de autenticación está hardcodeado en el código. Para un entorno de producción, se recomienda:

1. Crear un archivo `.env` en la raíz del proyecto
2. Agregar las siguientes variables:

```env
PORT=3000
API_BASE_URL=https://jsonplaceholder.typicode.com
```

3. Instalar `dotenv`:
```bash
npm install dotenv
```

4. Modificar `index.js` para usar variables de entorno

### .gitignore

El proyecto incluye un archivo `.gitignore` configurado para excluir:
- `node_modules/` - Dependencias instaladas
- `package-lock.json` - Archivo de lock (se genera automáticamente)
- Archivos de logs y temporales
- Variables de entorno (`.env`)
- Configuraciones de IDEs
- Archivos específicos del sistema operativo

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
