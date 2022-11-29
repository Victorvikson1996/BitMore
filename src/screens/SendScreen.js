import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS} from '../utils';
import {Button} from '../components/Buttons';
import BdkRn from 'bdk-rn';

const SendScreen = () => {
  const [address, setAddress] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [transaction, setTransaction] = useState();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState();

  const sendTx = async () => {
    try {
      const {data} = await BdkRn.broadcastTx({
        address: recipient,
        amount: amount,
      });
      Alert.alert(data.error ? 'Error' : 'Transaction broadcasted', data);
      setTransaction(data);
      console.log(data);
      setDisplayText(JSON.stringify(data));
    } catch (err) {
      Alert.alert(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sendSection}>
        <TextInput
          style={styles.input}
          placeholder="Recipient Address"
          placeholderTextColor={COLORS.tabBarActiveTintColor}
          onChangeText={setRecipient}
          color={COLORS.tabBarActiveTextColor}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount (in sats)"
          onChangeText={e => setAmount(parseInt(e))}
          placeholderTextColor={COLORS.tabBarActiveTintColor}
        />
        <Button onPress={sendTx} title="Send Bitcoin" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MainbackgroundColor,
  },
  sendSection: {
    alignItems: 'center',
    width: '90%',
    marginTop: 50,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderColor: COLORS.tabBarActiveTintColor,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 20,
  },

  input: {
    borderColor: COLORS.tabBarActiveTintColor,
    borderWidth: 2,
    width: '80%',
    padding: 15,
    margin: 5,
    borderRadius: 5,
  },
});

export default SendScreen;
