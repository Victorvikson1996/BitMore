import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {COLORS} from '../utils';
// import {Card} from '../components/Card';
import {DATA} from '../components/Wallet/WalletContent';
import {WalletCategory, WalletContent} from '../components/Wallet';
import BdkRn from 'bdk-rn';
import get from 'redux-actions/lib/utils/get';

const {width} = Dimensions.get('window');

const Card = () => {
  const [mnemonic, setMnemonic] = useState('');
  const [wallet, setWallet] = useState();
  const [syncResponse, setSyncResponse] = useState();
  const [address, setAddress] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [balance, setBalance] = useState();

  const getAddress = async () => {
    const {data} = await BdkRn.getNewAddress();
    setAddress(data);
    setDisplayText(data);
  };

  const getBalance = async () => {
    await BdkRn.syncWallet();
    const {data} = await BdkRn.getBalance();
    setBalance(data);
    console.log('BALANCE', data + `` + 'Sat');
    setDisplayText(JSON.stringify(data));
  };

  useEffect(() => {
    getAddress();
    getBalance();
  }, []);

  return (
    <View style={styles.card}>
      <View style={styles.balance}>
        <Text style={styles.blnTxt}>Balance</Text>
        <View style={styles.text}>
          <Text style={styles.sats}>{balance ? balance : '0'} Sats</Text>
        </View>
        <View style={{marginTop: 50, marginHorizontal: 20}}>
          <Text selectable style={styles.address}>
            Address:{address ? address : ''}{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = ({route}) => {
  const [mnemonic, setMnemonic] = useState('');
  const [wallet, setWallet] = useState();
  const [syncResponse, setSyncResponse] = useState();
  const [address, setAddress] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [balance, setBalance] = useState();

  const createWallet = async () => {
    const {data} = await BdkRn.createWallet({
      mnemonic: mnemonic,
      network: 'testnet',
    });
    setWallet(data);
    setDisplayText(JSON.stringify(data));
  };

  useEffect(() => {
    createWallet();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardCon}>
        <Card />
      </View>
      <View style={{flex: 1, margin: 10}}>
        <WalletCategory />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MainbackgroundColor,
  },
  cardCon: {
    marginTop: 70,
  },

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

  balance: {
    alignContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  blnTxt: {
    fontSize: 15,
    color: COLORS.MainbackgroundColor,
  },
  text: {
    top: 10,
  },
  sats: {
    color: COLORS.MainbackgroundColor,
    fontSize: 25,
    fontWeight: '900',
  },
  address: {
    color: COLORS.MainbackgroundColor,
    fontSize: 15,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
