import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { Provider } from "react-redux";
import store from "./src/store/store";

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
