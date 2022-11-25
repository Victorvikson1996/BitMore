import {View, Text, FlatList, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils';

const moneyBag = require('../../assets/Icons/money-bag.png');
const money = require('../../assets/Icons/money.png');

export const DATA = [
  {
    id: 1,
    content: 'Fund Account',
    icon: require('../../assets/Icons/money-bag.png'),
  },
  {
    id: 2,
    content: 'Buy Bitcoin',
    icon: require('../../assets/Icons/money.png'),
  },
];

const WalletContent = ({item, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageCon}>
        <Image source={{uri: item.icon}} style={styles.image} />
      </View>
      <View style={styles.contentCon}>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.MainbackgroundColor,
    // marginTop: 10,
    // paddingHorizontal: 24,
    // paddingVertical: 10,
    borderColor: COLORS.tabBarActiveTintColor,
    borderWidth: 2,
    borderRadius: 10,
  },
  image: {
    resizeMode: 'center',
    height: 40,
    width: 25,
  },
  content: {
    fontSize: 12,
    textAlign: 'center',
    color: COLORS.tabBarActiveTintColor,
  },
});

export default WalletContent;
