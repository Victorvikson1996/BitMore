import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils';

const {width} = Dimensions.get('window');

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.balance}>
        <Text style={styles.blnTxt}>Balance</Text>
        <View style={styles.text}>
          <Text style={styles.sats}>15.000 Sats</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: width * 0.85,
    backgroundColor: COLORS.cardColor,
    // marginLeft: 20,
    shadowColor: COLORS.grey,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {height: 10},
    elevation: 10,
    resizeMode: 'contain',
    borderRadius: 20,
    borderWidth: 7,
    borderColor: COLORS.white,
    marginHorizontal: 25,
  },

  balance: {},
  blnTxt: {},
  text: {},
  sats: {},

  methodSection: {
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderColor: COLORS.tabBarActiveTintColor,
    // borderWidth: 2,
    // borderRadius: 10,
  },
});

export default Card;
