import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class Button extends Component {
  state = {
    showButton: true,
  };

  openCloseTasks = () => {
    this.setState({ showButton: !this.state.showButton });
    this.props.showClose();
  };

  render = () => (
    <View style={styles.container} onTouchEnd={this.openCloseTasks}>
      <Text style={styles.text}>{this.state.showButton ? 'SHOW ' : 'HIDE '}Answered Prayers</Text>
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
    width: 209,
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
