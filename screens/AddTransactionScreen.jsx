import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddTransactionScreen({ navigation, route }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  // Вземаме addTransaction функцията от route.params
  const { addTransaction } = route.params;

  const handleSubmit = () => {
    if (!description.trim() || !amount.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber)) {
      Alert.alert('Error', 'Amount must be a valid number');
      return;
    }

    // Добавяме новата транзакция
    addTransaction({ description, amount: amountNumber });

    // Връщаме се към началния екран
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
      />

      <Text>Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Enter amount"
      />

      <Button title="Add Transaction" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
