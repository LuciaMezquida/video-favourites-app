![Gif](https://media.giphy.com/media/fDNGJgYm6xIfm/giphy.gif)

# Video Favourites App

Se trata de una aplicación para poder guardar videos favoritos, hecha con [React](https://es.reactjs.org/) y [Sass](https://sass-lang.com/), a través del curso de [CodelyTv](https://codely.tv/pro/cursos)

## Contenido

Se pueden añadir vídeos nuevos a la aplicación dándole al botón 'Añadir video', apareciendo una modal donde se podrá añadir título, el video y una descripción del mismo. Automáticamente aparecerá el video junto con los otros ya añadidos. Al hacer click sobre una de las imágenes de los videos accederemos a la reproducción del video y a la descripción.

A su vez, aparecerán varios mensajes de advertencia, como cuando no hay ningún video que coincida con la búsqueda, cuando no se puede cargar el video y un loader para cuando tarde en cargarse.

## Esctructura

~~~
src
├── api
│   ├── index.js --> (datos iniciales y funciones para conseguir los videos y subir videos nuevos)
├── components
│   ├── About --> (renderiza información sobre el proyecto)
│   │   ├── About.js
│   │   └── About.scss
│   ├── Add --> (renderiza la modal para añadir un nuevo video)
│   │   ├── Add.js
│   │   └── Add.scss
│   ├── Detail --> (renderiza un video y su descripción)
│   │   ├── Detail.js
│   │   └── Detail.scss
│   ├── Footer --> (renderiza el Footer)
│   │   ├── Footer.js
│   │   └── Footer.scss
│   ├── Header --> (renderiza el título, con el botón de añadir video y el enlace a About)
│   │   ├── Header.js
│   │   └── Header.scss
│   ├── Item --> (renderiza la imagen y el título de cada video)
│   │   ├── Item.js
│   │   └── Item.scss
│   ├── List --> (renderiza el listado de imágenes de los videos añadidos)
│   │   ├── List.js
│   │   └── List.scss
│   ├── Loading --> (renderiza un mensaje mientras se cargan los datos)
│   │   ├── Loading.js
│   │   └── Loading.scss
│   ├── Video --> (renderiza el contenedor del video)
│   │   ├── Video.js
│   │   └── Video.scss
│   └── Root.js
│
├── styleSheets
│   ├── App.css
│   ├── index.css
│   └── variables.scss
├── App.js
└── index.js


~~~

## La Web

Página principal

![Landing](https://i.ibb.co/H4tVL4L/Captura-de-pantalla-2020-12-19-a-las-17-17-44.png)

Video detallado

![Video](https://i.ibb.co/Kjp4xPc/Captura-de-pantalla-2020-12-19-a-las-17-18-10.png)

## Arrancar el proyecto

### `npm install`

Para instalar el proyecto

### `npm start`

Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'

### `npm run build`

Para publicar el proyecto a producción
