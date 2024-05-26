const { makeExecutableSchema } = require("graphql-tools")
const {resolvers} = require("./resolvers");

const typeDefs = `
    type Querry {
        hello: String
    }
`;

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

module.exports = schema