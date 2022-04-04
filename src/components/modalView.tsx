import {
  MaterialIcons,
  FontAwesome,
  AntDesign,
  SimpleLineIcons,
} from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ModalView() {
  const [idPressed, setIdPressed] = useState<number>(1);
  const [heartFill, setHeartFill] = useState<boolean>(false);

  const numberOfPeople = [
    {
      id: 1,
      number: 1,
    },
    {
      id: 2,
      number: 2,
    },
    {
      id: 3,
      number: 3,
    },
    {
      id: 4,
      number: 4,
    },
    {
      id: 5,
      number: 5,
    },
  ];

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        width: width,
        bottom: 60,
        padding: 30,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Yosemite </Text>
        <Text style={{ fontSize: 20, color: 'gray' }}> $ 250 </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 5,
        }}
      >
        <MaterialIcons name='location-pin' size={17} color='gray' />
        <Text style={{ fontSize: 12, color: 'gray' }}> USA, Califórnia </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 5,
        }}
      >
        <FontAwesome
          name='star'
          size={15}
          color='#d88042'
          style={{ marginHorizontal: 5 }}
        />
        <FontAwesome
          name='star'
          size={15}
          color='#d88042'
          style={{ marginHorizontal: 5 }}
        />
        <FontAwesome
          name='star'
          size={15}
          color='#d88042'
          style={{ marginHorizontal: 5 }}
        />
        <FontAwesome
          name='star'
          size={15}
          color='#d88042'
          style={{ marginHorizontal: 5 }}
        />
        <Text style={{ fontSize: 12, color: 'gray' }}> (4.0) </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>
          {' '}
          People{' '}
        </Text>
        <Text style={{ fontSize: 12, color: '#b9b9b9' }}>
          {' '}
          Number of people in your group{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 15,
          }}
        >
          {numberOfPeople.map((num) => (
            <TouchableOpacity
              key={num.id}
              style={{
                backgroundColor: idPressed === num.number ? '#000' : '#fff',
                marginHorizontal: 5,
                width: 50,
                height: 50,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 0.6,
              }}
              activeOpacity={0.6}
              onPress={() => setIdPressed(num.number)}
            >
              <Text
                style={{
                  color: idPressed === num.number ? 'white' : 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              >
                {' '}
                {num.number}{' '}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Description
        </Text>
        <Text
          style={{ fontSize: 12, color: '#b9b9b9', textAlign: 'left' }}
          numberOfLines={3}
        >
          {' '}
          Yosemite National Park is located in the central Sierra Nevada of
          California. Three wilderness areas are adjacent to Yosemite: the Ansel
          Adams Wilderness to the southeast, the Hoover Wilderness to the
          northeast, and the Emigrant Wilderness to the north{' '}
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 30,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setHeartFill(!heartFill)}
        >
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 15,
              borderWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AntDesign
              name={heartFill ? 'heart' : 'hearto'}
              size={22}
              color='black'
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          //   onPress={() => setHeartFill(!heartFill)}
          style={{
            backgroundColor: '#9d00f7',
            width: width - 120,
            marginHorizontal: 10,
            height: 55,
            borderRadius: 18,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: 'white' }}> Book Trip Now </Text>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <SimpleLineIcons name='arrow-right' size={10} color='white' />
            <SimpleLineIcons name='arrow-right' size={12} color='white' />
            <SimpleLineIcons name='arrow-right' size={12} color='white' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
