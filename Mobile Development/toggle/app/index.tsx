import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet, 
  ScrollView, 
  ActivityIndicator,
  TextInput
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('Hello, World!');

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  
  const updateGreeting = () => {
    if (name.trim()) {
      setGreeting(`Hello, ${name}!`);
    }
  };

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      style={[styles.scrollView, { backgroundColor: theme === 'light' ? '#f0f0f0' : '#333' }]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme === 'light' ? '#0a192f' : 'white' }]}>Developer's Playground</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme === 'light' ? '#0a192f' : 'white' }]}>Counter</Text>
        <View style={styles.counterContainer}>
          <Button 
            title="-" 
            onPress={decrement} 
            accessibilityLabel="Decrease counter"
          />
          <Text style={[styles.count, { color: theme === 'light' ? '#0a192f' : 'white' }]}>{count}</Text>
          <Button 
            title="+" 
            onPress={increment} 
            accessibilityLabel="Increase counter"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme === 'light' ? '#0a192f' : 'white' }]}>Theme Toggle</Text>
        <Button
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
          onPress={toggleTheme}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme === 'light' ? '#0a192f' : 'white' }]}>Personalized Greeting</Text>
        <TextInput
          style={[styles.input, { color: theme === 'light' ? '#0a192f' : 'white', backgroundColor: theme === 'light' ? 'white' : '#333' }]}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          onSubmitEditing={updateGreeting}
        />
        <Button
          title="Update Greeting"
          onPress={updateGreeting}
        />
        <Text style={[styles.greeting, { color: theme === 'light' ? '#0a192f' : 'white' }]}>{greeting}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme === 'light' ? '#0a192f' : 'white' }]}>Loading State Demo</Text>
        <Button
          title="Show Loading"
          onPress={() => setLoading(true)}
        />
        {loading && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
        <Button
          title="Hide Loading"
          onPress={() => setLoading(false)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    minWidth: 50,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  greeting: {
    textAlign: 'center',
  },
  loader: {
    marginVertical: 20,
  },
});