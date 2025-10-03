# Digital Sciencie — Express + EJS

Pequeña app MVC con **Express** y **EJS** que muestra un **listado de científicos**, su **detalle** y una **biografía** condicional.

## 🚀 Stack
- Node.js + Express
- EJS (vistas y parciales)
- nodemon (dev)

## 📁 Estructura
```bash
.
├── app.js
├── package.json
├── db
│   └── science.js
├── controllers
│   ├── heroeController.js
│   └── mainController.js
├── routes
│   ├── heroes.js
│   └── main.js
├── views
│   ├── index.ejs
│   ├── heroes.ejs
│   ├── heroDetail.ejs
│   ├── heroBio.ejs
│   ├── error.ejs
│   └── partials
│       ├── header.ejs
│       └── footer.ejs
└── public
    └── stylesheets
        └── style.css
```


## ▶️ Cómo correr
```bash
npm install

npm run dev   # nodemon

# o

npm start     # node

App por defecto en http://localhost:3000/.
```

## 🌐 Rutas principales

### Método	Ruta	Descripción
- GET	/	Portada / links

- GET	/heroes	Lista de científicos (nombre + links)

- GET	/heroes/detalle/id/:id	“Hola, mi nombre es NOMBRE y soy PROFESIÓN”

- GET	/heroes/bio/id/:id/:ok?	Si ok === "ok" muestra biografía; si no, “Lamento que no desees saber más de mí :(”

- GET	/creditos	Créditos
  
### Ejemplos rápidos
- http://localhost:3000/heroes

- http://localhost:3000/heroes/detalle/id/1

- http://localhost:3000/heroes/bio/id/1/ok

- http://localhost:3000/heroes/bio/id/1

- http://localhost:3000/heroes/bio/id/1/no

## 🧠 Lógica de “bio”
- ID inexistente → mensaje: “No encontramos al científico indicado para mostrar su biografía.”

- ID válido + ok === "ok" → muestra resenia

- ID válido + sin ok o distinto de “ok” → “Lamento que no desees saber más de mí :(”

## 👤 Créditos
Hecho por Guillermo Mangiante — práctica Digital Sciencie.

