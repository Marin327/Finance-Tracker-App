import React from 'react';
import { FlatList } from 'react-native';
import TransactionItem from './TransactionItem';

export default function TransactionList({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionItem transaction={item} />}
    />
  );
}
