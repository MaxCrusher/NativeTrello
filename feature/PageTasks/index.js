import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HeaderMain from '../../common/HeaderMain';
import AddPrayer from './AddPrayer';
import MenuNavs from './MenuNavs';

class PageTasks extends Component {
  render = () => (
    <View style={{ flex: 1 }}>
      <HeaderMain text="To do" />
      <MenuNavs />
      <AddPrayer />
    </View>
  );
}

export default PageTasks;
