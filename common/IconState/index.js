import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class IconState extends Component {
  render = () => <View style={styles.iconState} />;
}

const styles = StyleSheet.create({
  iconState: {
    height: 22,
    width: 3,
    backgroundColor: '#AC5253',
    borderRadius: 10,
  },
});

export default IconState;
