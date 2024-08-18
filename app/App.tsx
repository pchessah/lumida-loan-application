import React from "react";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { Provider } from "react-redux";
import { store } from "./src/state/store";
import { ApolloProvider } from "@apollo/client";
import client from "./src/features/graphql/services/AppolloClient";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MainStackNavigator />
      </Provider>
    </ApolloProvider>
  );
}
