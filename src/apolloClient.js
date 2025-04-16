import { ApolloClient, InMemoryCache,HttpLink } from '@apollo/client';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache({
        typePolicies : {
            User:{
                keyFields : ['id']
            }
        }
    })
});

export default client;