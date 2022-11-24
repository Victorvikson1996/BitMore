import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyles} from '../../utils/globalStyles';
import {AppColors} from '../../utils/AppColors';
import {COLORS} from '../../utils';

const Button = ({onPress, children, title, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '80%',
        backgroundColor: COLORS.tabBarActiveTintColor,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      }}
      testID="button">
      <Text
        testID="text"
        style={{
          color: COLORS.MainbackgroundColor,
          fontWeight: 'bold',
          fontSize: 18,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
