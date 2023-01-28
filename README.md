# Nest: Desarrollo backend escalable con Node
Udemy

## Sección 1: Introducción al curso

Nest es un framework de node extensible, versátil y progresivo, el cual nos ofrece la columna vertebral de todo tipo de aplicaciones del lado del servidor. Con Nest tendremos el poder de crear backend servers siguiendo las buenas prácticas recomendadas por el equipo de Nest y el mismo Kamil Mysliwiec (autor de Nest)

El curso parte de cero conocimiento de Nest y TypeScript y poco a poco vamos creando aplicaciones más complejas hasta desplegarlas en producción.

Puntualmente veremos temas como:

Core building blocks

Services

Controllers

Providers

Decorators

Gateways

Guards

Interceptors

Exception Filters

Modules

Docker

Docker-compose

Dockerization

CORS

Websockets

Autentication y Authorization basado en roles

JWTs

Ciclo de vida de una petición

Nest CLI

Transacciones de base de datos

Secuencias y UUID

Restful endpoints

Control de versiones con Git

Despliegues a producción.

Class transformation

Validaciones de inicio a fin de un request

DTOs

TypeORM

Postgres

MongoDB

TypeORM y Mongoose

Patrón repository para TypeORM

Schemas de Mongo

Core building blocks personalizados

Global Pipes, Filters, Exceptions.

Carga y validación de archivos

Principios SOLID

Documentación automática y semi-automática

Estructuras siguiendo las prácticas recomendadas por el equipo de Nest

Ciclo de vida de Nest

TypeScript

Genericos e interfaces.

Mucho mas.

## Sección 2: Breve introducción a typescript y conocimientos generales necesarios.

### Temas puntuales de la sección

Esta sección tiene por objetivo dar unas bases sobre TypeScript con la idea de que se familiaricen con los conceptos comunes usados en el día a día con Nest.

Aquí veremos:

Tipos básicos

Interfaces

Implementaciones

Clases

Patrón adaptador

Principio de sustitución de Liskov

Inyección de dependencias

Getters

Métodos asíncronos

Decoradores de clases y métodos

Es importante recalcar que esto no es una introducción a TypeScript, son conceptos que necesito exponer porque los usaremos en el curso de Nest.

## Sección 3: Primeros pasos en Nest

### Temas puntuales e la sección

Temas puntuales de la sección
Estamos entrando a nuestra primera sección sobre Nest, aquí veremos:

¿Qué es Nest?

¿Por qué usarlo?

Explicación sobre cada archivo en un proyecto nuevo de Nest

Core Nest building blocks

Módulos

Controladores (Post, Patch, Get, Delete)

Primeros decoradores

Servicios

Inyección de dependencias

Pipes

Exception Filters

Adicionalmente estaremos creando un Rest Api inicial para ir explicando cada concepto paso a paso.

## Sección 4: DTOs y Validación de información

### Temas puntuales de la sección

Esta sección terminaremos el POST, PATCH y DELETE de nuestro CRUD inicial, pero de forma puntual veremos:

DTO (Data Transfer Object)

Patch, Post, Delete

Validaciones automáticas

Class Validator

Class Transformer

Seguir el principio DRY (Don't repeat yourself)

Algunos decoradores del Class Validator útiles

## Sección 5: Nest CLI Resource - Brads CRUD

### Temas puntuales de la sección

Esta sección es básicamente un reforzamiento de lo aprendido hasta el momento, pero le adicionamos la comunicación entre módulos y servicios.

Puntualmente:

SEED Endpoint

Llenar data de Carros y Marcas

Comunicar módulo seed, con los otros módulos de nuestra aplicación

Errores comunes a la hora de utilizar módulos enlazados

Problemas con inyección de dependencias de módulos externos

Brands CRUD completo

Endpoints

DTOs

Servicios

Controladores

## Sección 6: Generar build de producción básico

npm run build

npm run start:dev

## Sección 7: MongoDB Pokedex

### Temas puntuales de la sección

Esta sección enteramente se enfoca en la grabación a base de datos, pero puntualmente:

Validaciones

CRUD contra base de datos

Docker y Docker Compose

Conectar contenedor con filesystem (para mantener la data de la base de datos)

Schemas

Modelos

DTOs y sus extensiones

Respaldar a Github

## Sección 8: Seed y paginación

### Temas puntuales de la sección

Esta sección tiene por objetivo aprender:

Uso de modelos en diferentes módulos

SEED para llenar la base de datos

Paginación de resultados

DTOs para Query parameters

Transformaciones de DTOs

También les mostraré varias formas de hacer inserciones por lote y varias formas de lograrlo.

## Sección 9: Variables de entorno - Deployment y Dockerizar la aplicación

### Temas puntuales de la sección

En esta sección trabajaremos en la configuración de variables de entorno y su validación:

Puntualmente veremos:

Dockerizacion

Mongo Atlas

Env file

joi

Validation Schemas

Configuration Module

Recomendaciones para un Readme útil

Despliegues

Dockerfile

* [Heroku app](https://pokemon-nest-app.herokuapp.com/)

# Notas

Heroku redeploy sin cambios:

```
git commit --allow-empty -m "Tigger Heroku deploy"
git push heroku <master|main>
```
# Bibliografía

* [Instalaciones recomendadas](https://gist.github.com/Klerith/c0ef4f48d986e2cf3308bb54fff84ea5)
* [Destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Controllers](https://docs.nestjs.com/controllers)
* [Services](https://docs.nestjs.com/providers#services)
* [Http status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
* [UUID](https://www.npmjs.com/package/uuid)
* [Pipes](https://docs.nestjs.com/pipes)
* [Class validator](https://github.com/typestack/class-validator#validation-decorators)
* [Mongo plugin (NEST)](https://docs.nestjs.com/techniques/mongodb)
