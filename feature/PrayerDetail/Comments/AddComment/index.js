import React, { Component } from 'react';
import { TextInput, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

class AddComment extends Component {
  state = {
    text: '',
  };

  addComment = () => {
    this.props.addComment(this.state.text);
    this.setState({ text: '' });
  };

  render = () => (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.addComment}>
        <Image source={require('../img/message-square.png')} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
        placeholder="Add a comment..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
  },
  input: {
    marginLeft: 10,
    paddingLeft: 10,
    color: '#0f0f0f',
    fontSize: 17,
  },
});

export default AddComment;
