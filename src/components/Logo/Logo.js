import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {globalStyles} from '../../utils/globalStyles';
import {AppColors} from '../../utils/AppColors';
import {COLORS} from '../../utils';

const Logo = () => {
  return (
    <View style={styles.backgroud}>
      <Image
        source={require('../../assets/Icons/bitcoin-logo.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: COLORS.tabBarActiveTintColor,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 35,
  },
  image: {width: 35, height: 35},
});
export default Logo;
