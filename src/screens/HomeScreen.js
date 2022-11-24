import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {COLORS} from '../utils';
import {Card} from '../components/Card';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Card />
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
    marginTop: 70,
  },
});

export default HomeScreen;
