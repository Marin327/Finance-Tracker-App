import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No transactions yet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: '#888',
    fontSize: 16,
  },
});
