import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AddButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>＋</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2280b0',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // ако искаш да го позиционираш над другото съдържание
    bottom: 30,
    right: 30,
    elevation: 5, // сенки за Android
    shadowColor: '#000', // сенки за iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  text: {
    fontSize: 30,
    color: '#fff',
    lineHeight: 30,
  },
});
