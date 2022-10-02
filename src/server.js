const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const app = express();
const config = require('./config');
const PORT = config.port;
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');


async function startServer() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}

startServer();