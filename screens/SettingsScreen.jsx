import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, useColorScheme } from 'react-native';

export default function SettingsScreen() {
  const systemColorScheme = useColorScheme(); // light или dark
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Тъмен стил динамично
  const styles = getStyles(isDarkMode);

  // Ако искаш, можеш да синхронизираш с системната тема:
  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.text}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.text}>App Version</Text>
        <Text style={styles.text}>1.0.0</Text>
      </View>
    </View>
  );
}

const getStyles = (darkMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: darkMode ? '#121212' : '#fff',
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderColor: darkMode ? '#333' : '#eee',
    },
    text: {
      fontSize: 18,
      color: darkMode ? '#fff' : '#000',
    },
  });
