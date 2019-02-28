import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NavItem from './NavItem';

const navsMenu = [{ id: 1, name: 'MY PRAYERS' }, { id: 2, name: 'SUBSCRIBERS' }];

class MenuNavs extends Component {
  render = () => {
    const navBut = navsMenu.map(elem => <NavItem key={elem.id + elem.name} text={elem.name} active={elem.id === 1} />);
    return <View style={styles.conainer}>{navBut}</View>;
  };
}

const styles = StyleSheet.create({
  conainer: {
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
});

export default MenuNavs;
