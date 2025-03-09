import { useState } from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>
        {isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode(!isDarkMode)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkMode: {
    backgroundColor: '#333',
  },
  lightText: {
    color: '#000',
    fontSize: 20,
  },
  darkText: {
    color: '#fff',
    fontSize: 20,
  },
});