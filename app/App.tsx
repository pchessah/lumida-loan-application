import React from "react";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { Provider } from "react-redux";
import { store } from "./src/state/store";
import { ApolloProvider } from "@apollo/client";
import client from "./src/features/graphql/services/AppolloClient";

export default function App() {
  return (
    // Wrap the app with ApolloProvider to provide GraphQL capabilities across the app.
    <ApolloProvider client={client}>
      {/* Wrap the app with Redux Provider to make the Redux store available to all components. */}
      <Provider store={store}>
        {/* The MainStackNavigator component handles navigation between different screens in the app. */}
        <MainStackNavigator />
      </Provider>
    </ApolloProvider>
  );
}
