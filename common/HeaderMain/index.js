import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

class HeaderMain extends Component {
  render = () => {
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        {this.props.text !== 'My Desk' ? (
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={require('./img/back.png')} />
          </TouchableOpacity>
        ) : (
          <Image source={require('./img/back.png')} />
        )}

        <Text style={styles.text}>{this.props.text}</Text>
        <Image
          source={this.props.text === 'To do' ? require('../../img/settings.png') : require('../../img/Union.png')}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: '#000000',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 375,
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
export default HeaderMain;
