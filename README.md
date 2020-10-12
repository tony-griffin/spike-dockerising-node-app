# spike-dockerising-node-app

## What is it?

A spike in creating a Task Manager application using a Node Express application with default configuration from 'express-generator' facility.
Then to Dockerise it along with a Postgres database and a Process Manager to be orchestrated by Docker Compose.

## Steps taken during the spike

```
npx express-generator --no-view task-manager
```

I also used Sequelize ORM, which handles all the SQL code for us and creates the initial tables on the database.

```
npm install --save pg sequelize
```

I also included tests for my routes, using Jest

```
npm i --save-dev jest
```

I used a PM2 as the process manager to ensure high availability

```
npm i --save pm2
```

## Docker

I ran a Postgres instance in a Docker container

```
docker run -it -p 5433:5432 --name=docker-pg-tutorial -e POSTGRES_PASSWORD=password postgres.
```

I created a Dockerfile and built the image with the tag name 'task-manager'

```
docker build -t task-manager .
```

I then ran the container based on that image

```
docker run -it -p 3010:3010 task-manager
```

## To start the Docker compose container locally:

```
docker-compose up
```

Configure postgres database

```
docker-compose run task-manager npm run migrate
```

From another terminal run tests

```
docker-compose run task-manager npm test
```

## What I learnt:

- Overview of Docker and Docker compose,
- Sequelize,
- Express-generator facility and API routing
- PM2 - process manager
