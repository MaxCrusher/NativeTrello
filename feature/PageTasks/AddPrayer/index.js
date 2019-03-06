import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

class AddPrayer extends Component {
  state = {
    text: '',
  };

  render = () => (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          this.setState({ text: '' });
          this.props.addTask(this.state.text);
        }}
      >
        <Image style={styles.image} source={require('../../../img/Union.png')} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
        placeholder="Add a prayer..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    height: 50,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingLeft: 10,
    color: '#0f0f0f',
    fontSize: 17,
  },
});

export default AddPrayer;
