import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconState from '../../common/IconState';
import PrayerInfo from './PrayerInfo';
import Members from './Members';
import Comments from './Comments';
import { getPrayerDetail, getComments, getActualUser } from '../../selector';
import { getCommentsA, addCommentA, editTextTaskA } from '../../actions';

class PrayerDetail extends Component {
  state = {
    value: this.props.task.text,
  };

  componentDidMount = () => {
    this.props
      .getComment(this.props.task.id)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  addComment = text => {
    this.props.addComment(this.props.actualUser.id, text, this.props.task.id);
  };

  render = () => {
    let comment = <ActivityIndicator size="large" color="#0000ff" />;
    if (!this.props.isLoading) {
      comment = <Comments comments={this.props.comments} addComment={this.addComment} />;
    }
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={require('./img/back.png')} />
            </TouchableOpacity>
            <Image source={require('./img/prayerWhite.png')} />
          </View>
          <TextInput
            style={styles.text}
            value={this.state.value}
            onChangeText={text => this.setState({ value: text })}
            onBlur={() => this.props.editTextTask(this.props.task.id, this.state.value)}
          />
        </View>
        <View style={styles.status}>
          <IconState />
          <Text style={styles.statusText}>Last prayed 8 min ago</Text>
        </View>
        <PrayerInfo />
        <Members />
        {comment}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    height: 130,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 17,
    paddingBottom: 23,
    backgroundColor: '#BFB393',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 17,
    lineHeight: 27,
  },
  status: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
  },
  statusText: {
    color: '#514D47',
    fontSize: 17,
    paddingLeft: 10,
  },
});
const mapStateToProps = (state, ownProps) => ({
  task: getPrayerDetail(state)(ownProps.navigation.getParam('id')),
  comments: getComments(state),
  actualUser: getActualUser(state),
  isLoading: state.comments.isLoading,
});

const mapDispatchToProps = {
  getComment: getCommentsA,
  addComment: addCommentA,
  editTextTask: editTextTaskA,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrayerDetail);
PrayerDetail.propTypes = {
  task: PropTypes.object.isRequired,
  editTextTask: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addComment: PropTypes.func.isRequired,
  getComment: PropTypes.func.isRequired,
  actualUser: PropTypes.object.isRequired,
};
