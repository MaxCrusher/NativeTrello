import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CheckBox from './CheckBox';
import InformationTask from './InformationTask';

class ItemTask extends Component {
  state = {
    isChecked: this.props.checked,
  };

  render = () => (
    <View style={styles.container}>
      <View style={styles.iconState} />
      <View onTouchStart={() => this.setState({ isChecked: !this.state.isChecked })}>
        <CheckBox checked={this.state.isChecked} />
      </View>
      <Text style={styles.text}>{this.props.text}</Text>

      <InformationTask name="user" num={this.props.users} />
      <InformationTask name="subscribers" num={this.props.subscribers} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: '#514D47',
    marginRight: 30,
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 23,
    paddingBottom: 23,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  iconState: {
    height: 22,
    width: 3,
    backgroundColor: '#AC5253',
    borderRadius: 10,
  },
});

export default ItemTask;
