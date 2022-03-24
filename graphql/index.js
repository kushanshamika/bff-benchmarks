const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const SpaceXDatasource = require('./datasource/spacexDatasource');
const UserDatasource = require('./datasource/userDatasource');
const TodoDatasource = require('./datasource/todoDatasource');
const PostDatasource = require('./datasource/postDatasource');
const typeDefs = importSchema('./schema.graphql');
const resolvers = {
    Query: {
        rockets: (root, _args, { dataSources }) => dataSources.spacexDatasource.rockets(),
        user: (root, {id}, { dataSources }) => dataSources.userDatasource.user({id: id}),
        todo: (root, {id}, { dataSources }) => dataSources.todoDatasource.todo({id: id}),
        post: (root, {id}, { dataSources }) => dataSources.postDatasource.post({id: id})
    }
  };
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
       spacexDatasource: new SpaceXDatasource(),
       userDatasource: new UserDatasource(),
       todoDatasource: new TodoDatasource(),
       postDatasource: new PostDatasource()
    })
  });
server.timeout = 0;
server.listen('9000').then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});