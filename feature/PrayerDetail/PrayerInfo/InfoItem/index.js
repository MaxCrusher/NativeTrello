import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

let text = null;

class InfoItem extends Component {
  render = () => {
    text = this.props.type ? <Text style={styles.textBlue}>Opened for 4 days</Text> : null;
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.textNum}>{this.props.num}</Text>
        <Text style={styles.text}>{this.props.text}</Text>
        {text}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E5E5E5',
    width: '50%',
    paddingLeft: 15,
    paddingRight: 15,
    height: 108,
    justifyContent: 'center',
  },
  textNum: {
    fontSize: 32,
    color: '#BFB393',
  },
  text: {
    color: '#514D47',
    fontSize: 13,
  },
  textBlue: {
    color: '#72A8BC',
    fontSize: 13,
  },
});
export default InfoItem;
