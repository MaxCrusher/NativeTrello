import React, { Component } from 'react';
import { View } from 'react-native';
import InfoItem from './InfoItem';

const infoItem = [
  { id: 1, type: true, text: 'Date Added', num: 1 },
  { id: 2, type: false, text: 'Times Prayed Total', num: 123 },
  { id: 3, type: false, text: 'Times Prayed by Me', num: 63 },
  { id: 4, type: false, text: 'Times Prayed by Others', num: 60 },
];

class PrayerInfo extends Component {
  render = () => {
    const content = infoItem.map(elem => (
      <InfoItem key={elem.id + elem.num} text={elem.text} num={elem.num} type={elem.type} />
    ));
    return <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{content}</View>;
  };
}

export default PrayerInfo;
