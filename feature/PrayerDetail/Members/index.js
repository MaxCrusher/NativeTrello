import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Members extends Component {
  render = () => (
    <View style={styles.container}>
      <Text style={styles.text}>MEMBERS</Text>
      <View style={styles.containerImage}>
        <Image style={{ marginRight: 8 }} source={require('./img/foto1.png')} />
        <Image style={{ marginRight: 8 }} source={require('./img/foto2.png')} />
        <View style={styles.circle}>
          <Image source={require('./img/add.png')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 20,
    paddingBottom: 28,
  },
  text: {
    fontSize: 13,
    color: '#72A8BC',
  },
  circle: {
    backgroundColor: '#BFB393',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 15,
  },
});

export default Members;
