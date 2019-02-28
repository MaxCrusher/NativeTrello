import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './feature/Main';
import PageTasks from './feature/PageTasks';

class App extends Component {
  render = () => (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.container} />
      <PageTasks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    height: 40,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default App;
