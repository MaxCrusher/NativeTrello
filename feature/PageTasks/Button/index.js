import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class Button extends Component {
  render = () => (
    <View style={styles.container}>
      <Text style={styles.text}>hide Answered Prayers</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BFB393',
    shadowColor: 'rgba(66, 78, 117, 0.1)',
    borderRadius: 15,
    marginTop: 21,
    marginBottom: 21,
  },
  text: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 17,
    paddingRight: 17,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#ffffff',
  },
});

export default Button;
