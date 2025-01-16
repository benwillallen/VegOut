import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BadgesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veggies</Text>
      <Text>Track your veggie progress here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
