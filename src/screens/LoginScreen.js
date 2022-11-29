import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../utils';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={{color: COLORS.tabBarActiveTintColor}}>
          COMMING SOON!!!!
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MainbackgroundColor,
  },
  text: {
    alignContent: 'center',
    alignItems: 'center',
  },
});
export default LoginScreen;
