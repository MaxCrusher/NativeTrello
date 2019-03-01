import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonMain from './ButtonMain';
import HeaderMain from '../../common/HeaderMain';

const nameBut = [{ id: 1, name: 'To do' }, { id: 2, name: 'In progress' }, { id: 3, name: 'Completed' }];

class Main extends Component {
  render = () => {
    const buttous = nameBut.map(elem => (
      <ButtonMain key={elem.id + elem.name} style={styles.button} text={elem.name} {...this.props} />
    ));
    console.log('+');
    return (
      <View>
        <HeaderMain style={{ height: 50, width: 50, backgroundColor: '#c9c9c9' }} text="My Desk" />
        <View style={styles.container}>{buttous}</View>
      </View>
    );
  };
}
const styles = StyleSheet.create({
  button: {
    width: 345,
    height: 59,
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
  },
});
export default Main;
