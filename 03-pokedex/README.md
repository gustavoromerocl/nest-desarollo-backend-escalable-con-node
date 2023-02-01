<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```

npm intall
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```
4. Levantar la base de datos

```
docker compose up -d

docker compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

5. Clonar el archivo __.env.template__ y renonmbrar la copia a __.env__

6. Llenar las variables de entorno definidas en el __.env__

7. Ejecutar aplicación en dev: 

```
npm run start:dev
```

8. Reconstruir la base de datos

```
GET: localhost:3000/api/v2/seed
```

# Production build

1. Crear el archivo .env.prod
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

# Notas

Heroku redeploy sin cambios:

```
git commit --allow-empty -m "Tigger Heroku deploy"
git push heroku <master|main>
```

Mostrar los puertos usados por contenedores docker
```
sudo lsof -i -P -n | grep <port number>
```

## Stack usado

* MongoDB
* Nest