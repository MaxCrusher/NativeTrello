import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

class HeaderMain extends Component {
  render = () => (
    <View style={styles.container}>
      <Text style={styles.text}>{this.props.text}</Text>
      <Image
        style={styles.butImage}
        source={this.props.text === 'To do' ? require('../../img/settings.png') : require('../../img/Union.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: '#000000',
  },
  butImage: {
    position: 'absolute',
    top: 24,
    right: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
    height: 64,
  },
});
export default HeaderMain;
