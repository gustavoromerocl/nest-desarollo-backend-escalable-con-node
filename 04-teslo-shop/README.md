<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Teslo API

1. Cloanr proyecto
2. ```npm install```
3. Clonar el archivo ```.env.template```y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
docker compose up -d
```
6. Ejecutar ```npm run start:dev```

# Recursos

[Teslo-Seed](https://gist.github.com/Klerith/1fb1b9f758bb0c5b2253dfc94f09e1b6)

# Notas

Mostrar los puertos usados por contenedores docker
```
sudo lsof -i -P -n | grep <port number>
```

# Bibliografía

[Eager relations](https://typeorm.io/eager-and-lazy-relations)