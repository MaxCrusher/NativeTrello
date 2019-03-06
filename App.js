import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import confStore from './store';
import Main from './feature/Main';
import PageTasks from './feature/PageTasks';
import PrayerDetail from './feature/PrayerDetail';

class App extends Component {
  render = () => (
    <Provider store={confStore}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <AppContainer />
      </SafeAreaView>
    </Provider>
  );
}

export default App;

const RootStack = createStackNavigator(
  {
    Home: { screen: Main },
    ToDo: {
      screen: PageTasks,
      navigationOptions: {
        header: null,
      },
    },
    PrayerDetail: {
      screen: PrayerDetail,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
  {
    header: {
      visible: false,
    },
  },
);

const AppContainer = createAppContainer(RootStack);
