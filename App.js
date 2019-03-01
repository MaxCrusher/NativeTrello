import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './feature/Main';
import PageTasks from './feature/PageTasks';

class App extends Component {
  render = () => <AppContainer />;
}

export default App;

const RootStack = createStackNavigator(
  {
    Home: { screen: Main },
    ToDo: { screen: PageTasks },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);
