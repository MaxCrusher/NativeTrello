import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';
import CheckBox from './CheckBox';
import IconState from '../../../common/IconState';
import InformationTask from './InformationTask';

class ItemTask extends Component {
  state = {
    isChecked: this.props.closed,
  };

  editCheckTask = () => {
    this.setState({ isChecked: !this.state.isChecked }, () =>
      this.props.editCheckTask(this.props.id, this.state.isChecked),
    );
  };

  render = () => {
    const swipeoutBtns = [
      {
        text: 'Delete',
        backgroundColor: '#AC5253',
        color: '#ffffff',
        onPress: () => {
          this.props.deleteTask(this.props.id);
        },
      },
    ];
    return (
      <Swipeout right={swipeoutBtns} backgroundColor="#ffffff" type="delete" buttonWidth={80}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('PrayerDetail', { id: this.props.id })}>
          <View style={styles.container}>
            <IconState />
            <View onTouchStart={this.editCheckTask}>
              <CheckBox checked={this.state.isChecked} />
            </View>
            <Text style={this.state.isChecked ? styles.textLine : styles.text}>
              {this.props.text.length < 15 ? this.props.text : this.props.text.slice(0, 15).concat('...')}
            </Text>

            <InformationTask name="user" num={3} />
            <InformationTask name="subscribers" num={100} />
          </View>
        </TouchableOpacity>
      </Swipeout>
    );
  };
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: '#514D47',
    marginRight: 15,
    width: '47%',
  },
  textLine: {
    fontSize: 17,
    color: '#514D47',
    marginRight: 15,
    width: '47%',
    textDecorationLine: 'line-through',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
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
ItemTask.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  closed: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editCheckTask: PropTypes.func.isRequired,
};
