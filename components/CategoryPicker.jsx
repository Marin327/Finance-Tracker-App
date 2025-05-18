import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CategoryPicker({ selected, onSelect, categories }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category:</Text>
      <Picker
        selectedValue={selected}
        onValueChange={onSelect}
        style={styles.picker}
      >
        {categories.map((cat) => (
          <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  label: { fontSize: 16, marginBottom: 5 },
  picker: { height: 50, width: '100%' },
});