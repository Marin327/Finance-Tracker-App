import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatCurrency } from '../utils/formatCurrency';

export default function BalanceCard({ total }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Balance</Text>
      <Text style={styles.amount}>{formatCurrency(total)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2280b0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  amount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
