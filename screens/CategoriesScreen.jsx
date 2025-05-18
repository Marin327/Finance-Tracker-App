import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { categories } from '../data/categories';

export default function CategoriesScreen({ navigation }) {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryButton}
      onPress={() => navigation.navigate('CategoryDetail', { categoryId: item.id, categoryName: item.name })}
    >
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderCategory}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  categoryButton: {
    padding: 15,
    backgroundColor: '#2280b0',
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
  },
});
