# Proyecto Modulo 3 equipo 2

## Descripción del proyecto🚀:

### Resumen:

En este proyecto vamos a realizar una aplicación web que nos permite crear una tarjeta de visita personalizada. En la página web podemos introducir nuestros datos profesionales y obtener una vista maquetada con esta información. Lo bueno de este proyecto es que será una herramienta de la que os podréis beneficiar. Será una aplicación web interactiva creada por vosotras y que podéis usar para crear vuestras propias tarjetas de visita profesionales.

### Objetivos:

Aprender los conceptos básicos de programación (variables, estructuras de datos, condicionales, funciones, etc.)
Comprender cómo manipular el DOM de una página y responder a eventos del usuario
Manejar estructuras de datos complejas, con arrays y objetos
Realizar peticiones al servidor y almacenar datos en local
Implementar Scrum como marco de referencia para el desarrollo del producto, basándonos siempre en los valores de Agile como puntos clave del trabajo en equipo y la mejora continua
Mejorar la comunicación entre los miembros del equipo
Mejorar vuestras habilidades de comunicación en público al exponer el proyecto en la sesión final

### Caso de uso:

Con esta web podréis mostrar que, a parte de maquetar, podéis crear una página web con la que interactuar y sacar algo que vaya más allá de una página que solo muestra información. Esto os permitirá mostrar vuestras habilidades a la hora de trabajar con JavaScript en GitHub, algo que en las empresas se valora bastante a la hora de escoger candidatas para puestos de programadora front-end.

### Especificaciones:

En el desarrollo de esta aplicación web usaremos las siguientes tecnologías:

- Uso avanzado de formularios HTML
- Maquetación usando CSS avanzado, como flex y grid
- Uso de mediaqueries para que el diseño sea adaptable al dispositivo usando la estrategia mobile first
- Gestión de eventos en el navegador (al hacer click, pasa x, etc.)
- Acceso y envío de datos a un servidor
- Almacenamiento en local usando LocalStorage
- Uso de git para el control de versiones del proyecto
- Publicación del resultado en Internet usando GitHub Pages
  El proyecto consta de 2 páginas:
- Una página landing de bienvenida
- Una página con la aplicación de crear tarjetas
  La aplicación funciona siguiendo estos pasos:

1. Permitir al usuario elegir el estilo de la tarjeta, eligiendo paleta de colores
2. Permitir al usuario que, mediante la introducción de información en un formulario, este texto se muestre maquetado automáticamente en un cuadro similar a una tarjeta de visita, que será la muestra del resultado final
3. Permitir que el usuario pueda crear una web con su tarjeta y compartirla por Twitter

La tarjeta de visita deberá tener los siguientes campos (entre paréntesis el nombre del campo a usar):

- Nombre completo (full_name)
- Profesión (desarrolladora front-end ;) (job)
- Datos personales
  - Teléfono (phone)
  - Correo electrónico (email)
- RRSS - LinkedIn (linkedin) - GitHub (github)
  Respecto a la interacción con la web:
- Los campos deberán tener restricciones para su formato indicado. Campo de teléfono para el móvil, mail para el correo, etc.
- Las modificaciones que hacemos en el formulario (diseño y contenido), aparecen automáticamente en la vista previa de la tarjeta
- Las 3 partes del proceso de creación serán elementos colapsables, que al hacer clic en el título se mostrará/ocultará solo mostrando una sección a la vez
- Toda la información del formulario debe almacenarse en LocalStorage (almacenamiento local del navegador), de forma que al recargar la página siga disponible y podamos borrarla con un botón de Reset. Para esto, debemos definir una estructura de datos compleja (con arrays y objetos) que es lo que guardaremos en el navegador
- Para compartir en Twitter seguiremos 2 pasos:
  1- Al hacer clic en el botón de "Enviar" enviaremos el formulario (submit) a un API que devolverá la URL de una web con la tarjeta de visita con la información rellena

2. Mostraremos esta URL para que el usuario verifique si la tarjeta está bien definida y un botón de "Compartir" que enlazará a Twitter donde habrá un tweet con texto predefinido que incluye la URL de la tarjeta

## Diseño

El diseño lo podéis inspeccionar en este proyecto de zeplin.

### Archivos

Podéis descargar los logos necesarios para completar el proyecto:

- Logo de Adalab
- Logo de Awesome Profile-cards

### Creatividad

Aunque el diseño del proyecto está cerrado, hemos dejado algunos aspectos que podéis personalizar:

- Usar un logo personalizado del equipo (o nombre del equipo) en el pie de página, tras la información de copyright
- Utilizar un fondo personalizado en la previsualización de la tarjeta
- Añadir más paletas a las definidas en el diseño, pero no eliminar las que os proponemos ;)

## Planificación del proyecto

### Sprints

Para la realización de este proyecto trabajaremos en 2 sprints (2 iteraciones) de 7 sesiones cada uno. Siguiendo los principios ágiles estableceremos pequeños ciclos iterativos de forma que al final de cada uno generemos valor perceptible por nuestros usuarios (los visitantes de la web). Dedicaremos el primer día a la planificación del sprint (sprint planning) y el resto a trabajar en el desarrollo del proyecto. Al final de cada sprint haremos una demo del proyecto para presentar los resultados conseguidos, y una retrospectiva (retro) para evaluar nuestro trabajo en equipo y mejorar en el siguiente sprint.
Al final del primer sprint haremos una demo corta de 5 minutos para presentar el resultado del trabajo al resto de las compañeras y a las profesoras. También haremos una retro corta revisando los working agreements que hemos acordado al inicio del proyecto.
Al final del segundo sprint (final del proyecto), haremos una demo de 5 minutos más preguntas, y una retrospectiva usando una dinámica similar a las usadas en los equipos de desarrollo que usan Scrum.

### Historias de usuario

Para la gestión del proyecto, usaremos historias de usuario, que es una herramienta para definir las características de un producto.

### Primera. Landing y UI de la herramienta

- Desarrollar la página de landing
- Desarrollar una primera versión básica de la web, con la maquetación de la estructura básica (para desktop y móvil) que incluye el formulario con los colapsables y la vista previa

### Segunda. Versión interactiva

- Formulario interactivo: al modificar un campo del formulario, tanto del diseño de la tarjeta como de los datos de usuario (excepto la foto), se actualiza la vista previa
- Realizar validaciones de datos del formulario: campos obligatorios, email, etc.

### Tercera. Compartir

- Actualización de la foto en la vista previa de la tarjeta, usando el componente proporcionado
- Añadir la funcionalidad de compartir en Twitter, enviando primero los datos al servidor para obtener la URL para compartir

### Cuarta. Versión offline

- Hacer que el contenido se almacene en LocalStorage del navegador

# Construido con 🛠️:

## Lenguajes:

HTML
SCSS
JAVASCRIPT
Estructura BEM

## Herramientas:

VSC
GITHUB
GULP
ADALAB WEB STARTER KIT
NPM

# Autores:

CARLOTA BLANCO
ANA MARCOS
NAIARA SARACHAGA
ZAHIRA ÁLVAREZ
