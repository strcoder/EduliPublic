# Eduli
Sistema de educación en linea

## Requerimientos
Node 14.15.0 https://nodejs.org/es/
####
Npm 7.5.2
####
Git https://git-scm.com/

## Clonar o descargar repositorio
### Clonar con SSH
En terminal o git bash escribir el siguinte comando:
###
git clone git@github.com:strcoder/EduliPublic.git
### Clonar con HTTPS
En terminal o git bash escribir el siguinte comando:
###
git clone https://github.com/strcoder/EduliPublic.git
### Descargar
Dar click en el boton codigo y descargar el zip

## Instalar dependencias
Ya que el repositorio haya clonado o descargado correctamente en terminal debera posicionarse en la carpeta raíz del proyecto
Ya posicionado correectamente en la raíz del proyecto escribir el siguiente comando
###
npm install && npm install -D

## Variables de entorno

Ya que las dependencias sean instaladas correctamente debera asignar las variables de entorno para que el proyecto funcione correctamente
Las variables de entorno estan en el archivo

### .env.example

Lo que se debera hacer es crear un nuevo archivo llamado .env en el cual debera poner las variables que se encuentre en el .env.example

### .env

ESto debera ir dentro del archivo .env

###

PORT=3000
###
ENV=development

API_URL=
###
ADMIN_API_KEYS_TOKEN=

## Scripts diponibles

UNa vez terminadas las configuraciones podra correr los siguientes scripts para correr el proyecto

### npm run build

Este script generara el build mediante esbuild el cual sera el que correran los dos siguientes scripts

### npm run dev

Correra el programa con nodemon

### npm run start

Correra el programa con node
