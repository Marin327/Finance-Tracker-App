import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatCurrency } from '../utils/format';

export default function TransactionItem({ transaction }) {
  return (
    <View style={styles.item}>
      <Text style={styles.description}>{transaction.description}</Text>
      <Text style={[styles.amount, { color: transaction.amount > 0 ? 'green' : 'red' }]}>
        {formatCurrency(transaction.amount)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  description: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
