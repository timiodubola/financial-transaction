import { gql } from 'apollo-server'
import { DateTimeResolver } from 'graphql-scalars'
import { Context } from './context'

export const typeDefs = gql`
  type Transaction {
    id:              String!  
    account:         String
    description:     String
    category:        String
    reference:       String
    currency:        String
    amount:          Int
    status:          String
    transactionDate: DateTime
    createdAt:       DateTime
    updatedAt:       DateTime
  }

  type Query {
    allTransaction: [Transaction!]!
  }


 scalar DateTime

`

export const resolvers = {
  Query: {
    allTransaction : async(_parent: unknown, _args: unknown , context: Context) => {
      return await context.prisma.transaction_.findMany()
    }   
  },
  DateTime: DateTimeResolver
}

