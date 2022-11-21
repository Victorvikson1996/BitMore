import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../utils/globalStyles';
import {AppColors} from '../../utils/AppColors';

const Button = ({onPress, children, title, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[globalStyles.btn, props.style]}>
      <Text heading="h3" color={AppColors.white}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
