# api-cbf

## Build Setup

```bash
# install dependencies
$ yarn install

# criar container de banco de dados
$ docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# execute migratrions
$ yarn typeorm migration:run

# serve with hot reload at localhost:3333
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
