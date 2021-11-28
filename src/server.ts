import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './schema'
import { context } from './context'

new ApolloServer({ resolvers, typeDefs, context: context }).listen(
  { port: process.env.PORT || 4000 }
).then (({url}) => console.log(` Server ready at:${url}`))

