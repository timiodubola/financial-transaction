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
    amount:          String
    status:          String
    transactionDate: DateTime
    createdAt:       DateTime
    updatedAt:       DateTime
  }

  type Query {
    allTransaction: [Transaction!]!
    DeatilsTransaction(id: String!): Transaction
    filterTransaction(search: DateTime!): [Transaction!]

  }

 scalar DateTime

`

export const resolvers = {
  Query: {
    allTransaction : async(_parent: unknown, _args: unknown , context: Context) => {
      return await context.prisma.transaction_.findMany()
    },
    DeatilsTransaction: async(_parent: unknown, args: { id: string } , context: Context) => {
      return await context.prisma.transaction_.findUnique({
        where: {
          id: args.id,
        },
      })
    },
    filterTransaction: async(_parent: unknown, args: { search: Date} , context: Context) => {
      return await context.prisma.transaction_.findMany({
        where: {
          OR: [
             { transactionDate: args.search},
             { createdAt:       args.search},
             { updatedAt:       args.search}
          ]
         
        },
      })
    }
  },
  DateTime: DateTimeResolver
}

