import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./config/database.config";
import { HelloResolver } from "./resolvers/HelloResolvers";
import { UserResolver } from "./resolvers/user.resolver";

async function startServer() {
  // Create an Express app
  const app = express();

  // Connect to the PostgreSQL database using TypeORM

AppDataSource.initialize()
  // Build the GraphQL schema
  const schema = await buildSchema({
    resolvers: [HelloResolver, UserResolver],
    emitSchemaFile: true, // Optional: Generates a GraphQL schema file
  });

  // Create an ApolloServer instance and apply it to the Express app
  const apolloServer = new ApolloServer({ schema });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  // Start the server
  app.listen(4000, () => {
    console.log("Server started on http://localhost:4000/graphql");
  });
}
startServer().catch((err) => {
  console.error("Error starting the server:", err);
});
