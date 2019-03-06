import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Comment extends Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../Members/img/avatar.png')} />
        <View style={styles.textItem}>
          <Text style={styles.textName}>{this.props.name}</Text>
          <Text style={styles.textComment}>{this.props.text}</Text>
        </View>
        <Text style={styles.dateText}>2 days ago</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40,
  },
  textItem: {
    alignItems: 'stretch',
    paddingLeft: 10,
  },
  textName: {
    color: '#514D47',
    fontSize: 17,
  },
  textComment: {
    fontSize: 17,
    color: '#514D47',
  },
  dateText: {
    color: '#9C9C9C',
    fontSize: 13,
    paddingLeft: 10,
    paddingTop: 3,
  },
});

export default Comment;
