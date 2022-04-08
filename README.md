# api-cbf

## Rafael Bisinotto Laranjo (140662)
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

# Open API Postman
https://www.postman.com/rafaellaranjo-api-cbf/workspace/api-cbf/collection/9746262-7a005a22-95dd-410f-a97c-4c5c2e1bf516?ctx=documentation

Necessario criar usuario e fazer autenticação, utilizar Bearer Token
```
