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

## Sección 10: TypeORM - Postgres

### Temas puntuales de la sección

En esta sección estaremos trabajando con:

TypeORM

Postgres

CRUD

Constrains

Validaciones

Búsquedas

Paginaciones

DTOs

Entities

Decoradores de TypeORM para entidades

Métodos BeforeInsert, BeforeUpdate

Es una sección importante porque a partir de aquí, empezaremos a construir sobre ella relaciones, autenticación, autorización y websockets.

## Sección 11: Relaciones en TypeORM

### Temas puntuales de la sección

Esta sección está cargada de contenido nuevo que les puede servir mucho, especialmente si trabajan con bases de datos relacionales.

Temas que veremos:

Relaciones

De uno a muchos

Muchos a uno

Query Runner

Query Builder

Transacciones

Commits y Rollbacks

Renombrar tablas

Creación de un SEED

Aplanar resultados

La idea es hacer que nuestro endpoint de creación y actualización de producto permita la actualización de una tabla secundaria de la misma forma como lo hemos creado en la sección pasada.

## Sección 12

### Temas puntuales de la sección

Esta sección es bien interesante porque trabajaremos con la carga de archivos a nuestro backend. Idealmente recuerden, que no es recomendado colocar archivos físicamente en nuestro backend, lo que se recomienda es subirlos y colocarlos en un hosting o servicio diferente.

Pero el conocimiento de tomar y ubicar el archivo en otro lugar de nuestro file system es bastante útil.

Aquí veremos validaciones y control de carga de cualquier archivo hacia nuestro backend.

## Sección 13

### Temas puntuales de la sección

Esta es una de las secciones más grandes del curso y está cargada de muchos conceptos nuevos, mi recomendación es que traten de digerirla en dos jornadas de estudio en lugar de intentar verla completamente en una sola corrida.

Puntualmente veremos:

Autenticación

Autorización

Json Web Tokens

Hash de contraseñas

Nest Passport

Módulos asíncronos

Protección de rutas

Custom Method Decorators

Custom Class Decorators

Custom Property Decorators

Enlazar usuarios con productos

Bearer Tokens

Y mucho más

Hay varias tareas dentro de esta sección que esperaría que intenten llevar con calma, todo lo que esta sección contiene puede ser abrumador.

## Sección 14: Documentación - OpenAPI

### Temas puntuales de la sección

El objetivo de esta sección es trabajar con la documentación semi-automática que nos ofrece Nest para seguir  la especificación de OpenAPI



Puntualmente veremos:

Postman documentation

Nest Swagger

## Sección 15: Websockets

### Temas puntuales de la sección

Esta sección tiene información sobre la comunicación entre cliente y servidor mediante WebSockets, puntualmente veremos:



Nest Gateways

Conexiones

Desconexiones

Emitir y escuchar mensajes desde el servidor y cliente

Cliente con Vite y TS

Autenticar conexión mediante JWTs

Usar mismo mecanismos de autenticación previamente creado

Desconectar sockets manualmente

Prevenir doble conexión de usuarios autenticados.

## Sección 16: Desplegar toda la aplicación a producción

### Temas puntuales de la sección

Esta sección trabajaremos en desplegar todo el backend y frontend, pero puntualmente aprenderemos:

Heroku CLI

Logs y Tails de logs

Manejo de errores en producción

Configuración de variables de entorno

Postgres en la nube

Despliegue en Netlify

Pruebas de aplicación

CORS

Generar build de producción VITE

y mucho más

Espero que esta sección les guste mucho y nos vemos en el siguiente video!! :D



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
* [Dockerfile](https://gist.github.com/Klerith/e7861738c93712840ab3a38674843490)
* [Database (Postgres)](https://docs.nestjs.com/techniques/database)
* [Eager relations](https://typeorm.io/eager-and-lazy-relations)
* [QueryRunner](https://orkhan.gitbook.io/typeorm/docs/query-runner)
* [File Upload](https://docs.nestjs.com/techniques/file-upload)
* [Authentication](https://docs.nestjs.com/security/authentication)
* [Decorator composition](https://docs.nestjs.com/custom-decorators#decorator-composition)
* [Open API](https://docs.nestjs.com/openapi/introduction)
* [Web sockets](https://docs.nestjs.com/websockets/gateways)