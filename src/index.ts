import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { PrismaClient } from '@prisma/client'
import { Context } from 'apollo-server-core'
import { resolvers } from '@generated/type-graphql'

async function main() {
  const schema = await buildSchema({
    resolvers,
  })

  const prisma = new PrismaClient()
  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
  })
  const { port } = await server.listen(4000)
  console.log(`GraphQL is listening on ${port}!`)
}

main().catch(console.error)
