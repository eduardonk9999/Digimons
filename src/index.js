const { ApolloServer, gql } = require('apollo-server');

const digiEscolhidos = [
  {
    digiescolhido: 'Tai Kamiya',
    digimon: 'Agumon',
  },
  {
    digiescolhido: 'Matt Ishida',
    digimon: 'Gabumon',
  },
];

const typeDefs = gql`
  type Digiescolhido {
    digiescolhido: String,
    digimon: String
  }

  type Query {
    digiEscolhidos: [Digiescolhido]
  }
`;

const resolvers = {
  Query: {
    digiescolhidos: () => digiEscolhidos,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`👾 server start ${url}`)
})