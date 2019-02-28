import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class NavItem extends Component {
  render = () => (
    <View style={this.props.active ? styles.containerActive : styles.container}>
      <Text style={this.props.active ? styles.textActive : styles.text}>{this.props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textActive: {
    color: '#72A8BC',
    fontSize: 13,
    textAlign: 'center',
  },
  text: { fontSize: 13, textAlign: 'center', color: '#C8C8C8' },
  container: {
    flex: 1,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerActive: {
    flex: 1,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#72A8BC',
    borderBottomWidth: 2,
  },
});

export default NavItem;
