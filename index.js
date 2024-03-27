const { ApolloServer, gql } = require("apollo-server");

//Tagged Template
//Grafos (nós) que podem ser acessados independentemente da ordem
const typeDefs = gql`
  #Pontos de entrada da API

  type Query {
    ola: String
    horaAtual: String
  }
`;

//Os métodos do objeto resolvem" a query enviada pelo client para retornar um resultado
const resolvers = {
  Query: {
    ola() {
      return "Retornando uma String";
    },
    horaAtual() {
      return `${new Date()}`;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Executando em ${url}`));
