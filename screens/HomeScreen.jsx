import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import BalanceCard from '../components/BalanceCard';
import TransactionList from '../components/TransactionList';
import AddButton from '../components/AddButton';

export default function HomeScreen({ navigation }) {
  const [transactions, setTransactions] = useState([
    { id: '1', description: 'Salary', amount: 2500 },
    { id: '2', description: 'Groceries', amount: -120 },
    { id: '3', description: 'Gas', amount: -40 },
  ]);

  // Функция за добавяне на нова транзакция
  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { id: Date.now().toString(), ...newTransaction },
    ]);
  };

  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <View style={styles.container}>
      <BalanceCard total={total} />
      <TransactionList data={transactions} />
      
      {/* Предаваме addTransaction като параметър при навигация */}
      <AddButton
        onPress={() => navigation.navigate('AddTransaction', { addTransaction })}
      />

      <Button title="Stats" onPress={() => navigation.navigate('Stats')} />
      <Button title="Categories" onPress={() => navigation.navigate('Categories')} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
