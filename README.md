# sample-apollo-prisma-typegql-api

A simple apollo, prisma, and type-graphql api.

```
npm init -y

tsc --init

// create src/index.ts and have a log. // Everything working.

// Dependencies
npm i graphql apollo-server @prisma/client type-graphql reflect-metadata

// Dev dependencies
npm i -D typescript ts-node prisma typegraphql-prisma

// Initialize prisma
npx prisma init

// Create a model in prisma.schema
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}

// Create the table in postgres.
prisma db push

// Open prisma studio to interact with the database. Add a few rows.
prisma studio

// Introduce type-graphql
// Paste the below code in prisma/shema.prisma
generator typegraphql {
  provider = "typegraphql-prisma"
}

// Run
npx prisma generate

// Run the server
npm start
```

Thank you.
