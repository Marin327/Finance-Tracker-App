// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTransactions = async (transactions) => {
  try {
    await AsyncStorage.setItem('transactions', JSON.stringify(transactions));
  } catch (error) {
    console.log('Error saving:', error);
  }
};

export const loadTransactions = async () => {
  try {
    const json = await AsyncStorage.getItem('transactions');
    return json ? JSON.parse(json) : [];
  } catch (error) {
    console.log('Error loading:', error);
    return [];
  }
};
