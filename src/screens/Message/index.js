/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Pressable, Text} from 'react-native';

const MessageScreen = (props) => {
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#c3c3c3',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Message</Text>
      </Pressable>
    </View>
  );
};

export default MessageScreen;
