import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class CheckBox extends Component {
  render = () => {
    let check = null;
    if (this.props.checked) {
      check = <Image style={styles.image} source={require('../img/check.png')} />;
    }
    return <View style={styles.container}>{check}</View>;
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#514D47',
    borderRadius: 4,
    width: 22,
    height: 22,
  },
});

export default CheckBox;
