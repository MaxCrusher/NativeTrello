import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasksClose, getTasksNotClose, getActualUser } from '../../selector';
import { getTasksA, addTaskA, editCheckTaskA, deleteTaskA } from '../../actions';
import HeaderMain from '../../common/HeaderMain';
import AddPrayer from './AddPrayer';
import MenuNavs from './MenuNavs';
import ItemTask from './ItemTask';
import Button from './Button';

class PageTasks extends Component {
  state = {
    show: false,
  };

  componentDidMount = () => {
    this.props
      .fetchGetTasks(this.props.actualTypeId)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  addTask = text => {
    console.log(this.props.actualUser.id, this.props.actualTypeId, text);
    this.props.fetchAddTasks(this.props.actualUser.id, this.props.actualTypeId, text);
  };

  deleteTask = id => {
    this.props.deleteTask(id, this.props.actualTypeId);
  };

  _keyExtractor = (item, index) => item.id;

  editTaskCheck = (id, check) => {
    console.log(id, check);
    this.props.editCheckTask(id, check)
      .then(response => this.setState({ show: this.state.show }))
      .catch(error => console.log(error));
  };

  showClose = () => {
    this.setState({ show: !this.state.show });
  };

  static navigationOptions = ({ navigation }) => ({
    headerMode: 'none',
    tabBarComponent: () => null,
  });

  render = () => {
    if (this.props.isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
        <HeaderMain navigation={this.props.navigation} text="To do" />
        <MenuNavs />
        <AddPrayer addTask={this.addTask} />
        <FlatList
          style={{
            width: '100%',
            flexGrow: 0,
          }}
          keyExtractor={this._keyExtractor}
          data={this.props.tasksNotClose}
          renderItem={({ item }) => (
            <ItemTask {...item} key={item} navigation={this.props.navigation} editCheckTask={this.editTaskCheck} deleteTask={this.deleteTask} />
          )}
        />
        <Button showClose={this.showClose} />
        {this.state.show ? (
          <FlatList
            style={{
              width: '100%',
              flexGrow: 0,
            }}
            keyExtractor={this._keyExtractor}
            data={this.props.tasksClose}
            renderItem={({ item }) => (
              <ItemTask {...item} key={item} navigation={this.props.navigation} editCheckTask={this.editTaskCheck} deleteTask={this.deleteTask} />
            )}
          />
        ) : null}
      </View>
    );
  };
}

const mapStateToProps = state => ({
  isLoading: state.tasks.isLoading,
  actualTypeId: state.actualType.idType,
  actualUser: getActualUser(state),
  tasksClose: getTasksClose(state),
  tasksNotClose: getTasksNotClose(state),
});

const mapDispatchToProps = {
  fetchGetTasks: getTasksA,
  fetchAddTasks: addTaskA,
  editCheckTask: editCheckTaskA,
  deleteTask: deleteTaskA,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageTasks);

PageTasks.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchGetTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
