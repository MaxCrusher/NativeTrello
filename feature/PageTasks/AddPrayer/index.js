import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, Text } from 'react-native';

class AddPrayer extends Component {
  render = () => (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../img/Union.png')} />
      <TextInput style={styles.input} placeholder="Add a prayer..." />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    height: 50,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingLeft: 10,
    color: '#0f0f0f',
    fontSize: 17,
  },
});

export default AddPrayer;
