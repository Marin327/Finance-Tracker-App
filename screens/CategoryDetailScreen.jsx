import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { transactionsByCategory } from '../data/categories';
import TransactionItem from '../components/TransactionItem';

export default function CategoryDetailScreen({ route }) {
  const { categoryId, categoryName } = route.params;
  const transactions = transactionsByCategory[categoryId] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName} Transactions</Text>
      {transactions.length === 0 ? (
        <Text style={styles.emptyText}>No transactions in this category.</Text>
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionItem transaction={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  emptyText: { fontSize: 16, color: '#888', marginTop: 20, textAlign: 'center' },
});
