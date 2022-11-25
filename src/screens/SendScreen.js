import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../utils';
import {Button} from '../components/Buttons';

const SendScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MainbackgroundColor,
  },
});

export default SendScreen;
