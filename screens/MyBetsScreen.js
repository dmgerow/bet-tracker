import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function MyBetsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>My Bets</Text>
    </ScrollView>
  );
}

MyBetsScreen.navigationOptions = {
  title: 'My Bets',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
