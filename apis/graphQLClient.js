import {
    GraphQLClient
} from 'graphql-request';
import config from '../config/graph.config';

const API_URL = config.apiUrl + '/graphql';
const client = new GraphQLClient(API_URL);

export default client;