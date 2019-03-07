import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Comment from './Comment';
import AddComment from './AddComment';

export class Comments extends Component {
  render = () => {
    const comments = this.props.comments.map((elem, i) => (
      <Comment key={elem + i} name={elem.firstName.concat(' ', elem.surname)} text={elem.text} />
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Comments</Text>
        {comments}
        <AddComment addComment={this.props.addComment} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  text: {
    fontSize: 13,
    color: '#72A8BC',
    textTransform: 'uppercase',
    paddingBottom: 15,
    paddingLeft: 15,
  },
});

export default Comments;
Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired,
};
