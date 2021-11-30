# financial-transaction
SPA that exhibits a page with a table of financial transactions that can be filtered by date range.

## Technology
Vue, GraphQL, Prisma (ORM) & Postgres and TypeScript used in the back-end. 

## System Architecture 
![system architecture ](https://github.com/timiodubola/financial-transaction/blob/master/img/jp.jpg)

## FrontEnd (VUE)
Frontend application was deployed on Heroku and Graphql API was consumed  using Apollo Client.

Application deployment: [https://front-vue-1.herokuapp.com](https://front-vue-1.herokuapp.com/)

Front-End Application deployment Repository: [https://github.com/timiodubola/fin-tech-front](https://github.com/timiodubola/fin-tech-front)

## BackEnd (TypeScript, Graphql, Prisma ORM)
 
###  Usage

Endpoint can be consumed either from a remote server which is hosted on Heroku.
Postgres database is also hosted 

To test endpoints of API [https://fin-tech-timi.herokuapp.com/](https://studio.apollographql.com/sandbox/explorer), also  check api documentation provided.

### Preview 

#### AllTransaction endpoint
![AllTransaction endpoint test ](https://github.com/timiodubola/financial-transaction/blob/master/img/e.png)

#### DeatilsTransaction endpoint
![DeatilsTransaction endpoint test  ](https://github.com/timiodubola/financial-transaction/blob/master/img/d.png)

#### filterTransaction endpoint
![filterTransaction endpoint test  ](https://github.com/timiodubola/financial-transaction/blob/master/img/c.png)
