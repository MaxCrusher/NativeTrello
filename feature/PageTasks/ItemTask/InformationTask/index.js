import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export class InformaitonTask extends Component {
  render = () => (
    <View style={styles.container}>
      <Image
        style={this.props.name === 'user' ? styles.imageUser : styles.imagePrayer}
        source={this.props.name === 'user' ? require('../img/user.png') : require('../img/prayer.png')}
      />
      <Text style={styles.text}>{this.props.num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageUser: {
    width: 17,
    height: 20,
    marginRight: 5,
  },
  imagePrayer: {
    width: 29,
    height: 22,
    marginRight: 5,
  },
  text: {
    paddingTop: 5,
    fontSize: 12,
    color: '#514D47',
  },
});

export default InformaitonTask;
