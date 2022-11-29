import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS} from '../utils';
import {Button} from '../components/Buttons';
import BdkRn from 'bdk-rn';
import {Loader} from '../Loader';
import moment from 'moment';

const {width, height} = Dimensions.get('window');

const renderItem = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.TxnCon}>
        <Text style={styles.txid}>Trasaction id</Text>
        <Text selectable style={styles.tid}>
          {item.txid}
        </Text>
        <View style={styles.tidcon}>
          <Text style={styles.txid}>Amount Sent</Text>
          <Text selectable style={styles.tid}>
            {item.sent} Sats
          </Text>
        </View>
        <View style={styles.tidcon}>
          <Text style={styles.txid}>Amount Recieved</Text>
          <Text style={styles.tid} selectable>
            {item.received} Sats
          </Text>
        </View>
        <View style={styles.tidcon}>
          <Text style={styles.txid}>Transaction Fee</Text>
          <Text style={styles.tid} selectable>
            {item.fee}
          </Text>
        </View>
      </View>
    </View>
  );
};

const PendingScreen = () => {
  const [list, _list] = useState();
  console.log(list);
  const [loading, setLoading] = useState(true);

  const getConfirmedTx = async () => {
    const res = await BdkRn.getConfirmedTransactions();
    // _list(JSON.stringify(res.data));
    console.log(res.data);
    _list(res.data);
  };

  useEffect(() => {
    getConfirmedTx();
    setLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Transaction History</Text>
      </View>
      <View style={styles.Txn}>
        {loading ? (
          <Loader title="Transactions Loading !!!" />
        ) : (
          <FlatList
            data={list}
            keyExtractor={item => `${item.txid}`}
            renderItem={renderItem}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MainbackgroundColor,
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
    borderWidth: 0.9,
    borderColor: COLORS.white,
    marginHorizontal: 25,
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: COLORS.tabBarActiveTintColor,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: 30,
    color: COLORS.tabBarActiveTintColor,
  },
  headerSection: {
    marginTop: 15,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  TxnCon: {
    marginHorizontal: 20,
    marginTop: 5,
  },
  txid: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.MainbackgroundColor,
  },
  tid: {
    color: COLORS.MainbackgroundColor,
    fontSize: 14,
    fontWeight: '300',
  },
  tidcon: {
    marginBottom: 5,
  },
});

export default PendingScreen;
