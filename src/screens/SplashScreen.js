import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useMemo, useCallback, useState} from 'react';
import {COLORS} from '../utils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {globalStyles} from '../utils/globalStyles';
import {AppColors} from '../utils/AppColors';
import {Logo} from '../components/Logo';
import {Button} from '../components/Buttons';
import Loader from '../Loader/Loader';
import Animated from 'react-native-reanimated';
import {GestureDetector} from 'react-native-gesture-handler';
// import {SCREEN_HEIGHT} from '@gorhom/bottom-sheet';
import {BottomSheet} from '../components/BottomSheet';
import BdkRn from 'bdk-rn';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  const [mnemonic, setMnemonic] = useState('');
  const [displayText, setDisplayText] = useState('');

  const [loading, setLoading] = React.useState(false);

  const ref = useRef(null);

  const onPress = useCallback(async () => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }

    const {data} = await BdkRn.generateMnemonic({
      length: 12,
      network: 'testnet',
    });
    console.log(data);
    setMnemonic(data);
    setDisplayText(JSON.stringify(data));
  }, []);

  const _goToHome = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('Tab');
      setLoading(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} title="Creating Wallet..." />
      <View style={styles.logo}>
        <Logo />
        <View style={styles.text}>
          <Text
            style={{textAlign: 'center', color: COLORS.tabBarActiveTintColor}}>
            BitMore Wallet {'\n'} Your Bitcoin Wallets in Your Hands
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <Button title="Create a new Wallet" onPress={onPress} />
      </View>
      <BottomSheet ref={ref}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.methodSection}>
            <Text style={styles.mnemonic}>Mnemonic Phrase {'\n'}</Text>
            <TextInput
              style={styles.input}
              multiline
              value={mnemonic}
              onChangeText={setMnemonic}
              textAlignVertical="top"
              fontSize={20}
              color={COLORS.tabBarActiveTintColor}
            />

            <Button title="Continue" onPress={_goToHome} />
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MainbackgroundColor,
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200,
  },
  button: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 20,
    lineHeight: 10,
    marginBottom: 20,
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: COLORS.MainbackgroundColor,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: COLORS.MainbackgroundColor,
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
  },
  methodSection: {
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: COLORS.tabBarActiveTintColor,
    // borderWidth: 2,
    // borderRadius: 10,
  },
  input: {
    borderColor: COLORS.tabBarActiveTintColor,
    borderWidth: 2,
    width: '80%',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  mnemonic: {
    color: COLORS.tabBarActiveTintColor,
    fontSize: 20,
  },
});
export default SplashScreen;
