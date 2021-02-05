import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import productsReducer from './store/reducers/products.reducer';
import StackNavigation from './navigation/RootNavigator'

const rootReducer = combineReducers({
  products: productsReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
