import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const STEPZEN_API_KEY = process.env.STEPZEN_API_KEY;

const client = new ApolloClient({
  headers: {
    Authorization: `Apikey ${STEPZEN_API_KEY}`
  },
  uri: 'https://esquel.stepzen.net/api/ringed-hare/__graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <StatusBar />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
};