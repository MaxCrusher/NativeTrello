import React, { Component } from 'react';
import { ListView, View, StyleSheet } from 'react-native';
import HeaderMain from '../../common/HeaderMain';
import AddPrayer from './AddPrayer';
import MenuNavs from './MenuNavs';
import ItemTask from './ItemTask';
import Button from './Button';

const data = [
  { id: 1, checked: false, text: 'Prayer item two...', users: 3, subscribers: 100 },
  { id: 2, checked: false, text: 'Prayer item two...', users: 2, subscribers: 200 },
  { id: 3, checked: false, text: 'Prayer item two...', users: 1, subscribers: 300 },
];
class PageTasks extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data),
      length: data.length * 69,
    };
  }

  render = () => (
    <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
      <HeaderMain text="To do" />
      <MenuNavs />
      <AddPrayer />
      <ListView
        style={{
          width: '100%',
          paddingLeft: 15,
          paddingRight: 15,
          maxHeight: this.state.length,
        }}
        dataSource={this.state.dataSource}
        renderRow={rowData => <ItemTask {...rowData} />}
        pageSize={3}
        enableEmptySections={false}
      />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({});

export default PageTasks;
