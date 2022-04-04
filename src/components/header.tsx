import { AntDesign, Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Header() {
  return (
    <View
      style={{
        padding: 25,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <AntDesign name='swap' size={28} color='white' />
      <Entypo name='dots-two-vertical' size={24} color='white' />
    </View>
  );
}
