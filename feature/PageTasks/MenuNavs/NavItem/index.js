import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class NavItem extends Component {
  render = () => {
    console.log(this.props);
    return (
      <View style={this.props.active ? styles.containerActive : styles.container}>
        <Text style={this.props.active ? styles.textActive : styles.text}>{this.props.text}</Text>
        <View style={styles.circle}>
          <Text style={styles.circleText}>3</Text>
        </View>
      </View>
    );
  };
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
    flexDirection: 'row',
  },
  containerActive: {
    flex: 1,
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#72A8BC',
    borderBottomWidth: 2,
  },
  circle: {
    width: 16,
    height: 16,
    backgroundColor: '#AC5253',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  circleText: {
    fontSize: 9,
    color: '#fff',
  },
});

export default NavItem;
