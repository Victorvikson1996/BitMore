import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {COLORS} from '../utils';
// import {Card} from '../components/Card';
import {DATA} from '../components/Wallet/WalletContent';
import {WalletCategory, WalletContent} from '../components/Wallet';
import BdkRn from 'bdk-rn';
import get from 'redux-actions/lib/utils/get';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bitcoin from 'bitcoin-units';
import {Loader} from '../../src/Loader';

const {width} = Dimensions.get('window');

const shortenAddress = address => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length,
  )}`;
};

const Card = () => {
  const [mnemonic, setMnemonic] = useState('');
  const [wallet, setWallet] = useState();
  const [syncResponse, setSyncResponse] = useState();
  const [address, setAddress] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [balance, setBalance] = useState();
  const [loading, setLoading] = useState(true);

  const [trasaction, setTransaction] = useState('');

  let addr = address.length ? shortenAddress(address?.[0]) : 'Address';

  const _bitcoin = bitcoin(balance, 'satoshi').to('BTC').toString();
  console.log(_bitcoin);
  let _bit = balance * 0.00000001;

  const getAddress = async () => {
    const {data} = await BdkRn.getNewAddress();
    await AsyncStorage.setItem('@storage_Key', data);
    setAddress(data);
    setDisplayText(data);
  };

  const getBalance = async () => {
    await BdkRn.syncWallet();
    const {data} = await BdkRn.getBalance();
    await AsyncStorage.setItem('@storage_Key', data);
    setBalance(data);
    console.log('BALANCE', data + `` + 'Sat');
    setDisplayText(JSON.stringify(data));
  };

  const getTxHistory = async () => {
    const {data} = await BdkRn.getTransactions();
  };

  useEffect(() => {
    getAddress();
    getBalance();
  }, []);

  const bal = 6688757;

  return (
    <View style={styles.card}>
      <View style={styles.balance}>
        <Text style={styles.blnTxt}>Balance</Text>
        <View style={styles.text}>
          <Text selectable style={styles.sats}>
            {balance ? balance : '0'} Sats
          </Text>
          <Text selectable style={styles.btc}>
            {_bit.toFixed(6) ? _bit.toFixed(6) : '0'} BTC
            {/* {_bitcoin} BTC */}
            {/* {bitcoin(balance, 'satoshi').to('BTC').toString()} */}
          </Text>
        </View>
        <View style={{top: 20, marginHorizontal: 20}}>
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
  const [loading, setLoading] = useState(true);

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
    borderWidth: 1.0,
    borderColor: COLORS.tabBarActiveTintColor,
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
  btc: {
    color: COLORS.MainbackgroundColor,
    fontSize: 17,
    fontWeight: '300',
    left: 20,
  },
  address: {
    color: COLORS.MainbackgroundColor,
    fontSize: 15,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
