import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../utils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {globalStyles} from '../utils/globalStyles';
import {AppColors} from '../utils/AppColors';
import {Logo} from '../components/Logo';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Logo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MainbackgroundColor,
    flex: 1,
  },
});

export default SplashScreen;
