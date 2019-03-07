import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonMain from './ButtonMain';
import HeaderMain from '../../common/HeaderMain';
import { getTypes } from '../../selector';
import { getTypeA, setIdTypeA } from '../../actions';

class Main extends Component {
  componentDidMount = () => {
    this.props
      .fetchGetTypes()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  static navigationOptions = ({ navigation }) => ({
    header: () => null,
  });

  editIdType = id => {
    this.props.setIdType(id);
  };

  render = () => {
    const buttous = this.props.types.map(elem => (
      <ButtonMain
        key={elem.id + elem.text}
        style={styles.button}
        text={elem.text}
        id={elem.id}
        navigation={this.props.navigation}
        editIdType={this.editIdType}
      />
    ));
    if (this.props.isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
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

const mapStateToProps = state => ({
  types: getTypes(state),
  isLoading: state.types.isLoading,
});

const mapDispatchToProps = {
  fetchGetTypes: getTypeA,
  setIdType: setIdTypeA,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
Main.propTypes = {
  types: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchGetTypes: PropTypes.func.isRequired,
  setIdType: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};
