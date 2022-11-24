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

  details: {
    height: 70,
    width: '100%',
    position: 'absolute',
    backgroundColor: COLORS.white,
    bottom: 0,
    borderBottomEndRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardBtn: {
    width: 70,
    height: 30,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btn: {
    height: 50,
    width: 70,
    backgroundColor: COLORS.black,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  balance: {},
  blnTxt: {},
  text: {},
  sats: {},
});

export default Card;
