import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { setIdType } from '../../../actions';

class ButtonMain extends Component {
  render = () => (
    <View
      style={styles.button}
      onTouchStart={() => {
        this.props.editIdType(this.props.id);
        this.props.navigation.navigate('ToDo', { idType: this.props.id });
      }}
    >
      <Text style={styles.text}>{this.props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: '#514D47',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    marginBottom: 15,
  },
});
export default ButtonMain;
