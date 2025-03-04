import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  // Initialize state with a default message
  const [message, setMessage] = useState("Welcome to HelloWorld App!");

  // Function to toggle the message
  const toggleMessage = () => {
    setMessage(prevMessage =>
      prevMessage === "Welcome to HelloWorld App!" 
        ? "Button Pressed: Hello, React Native!" 
        : "Welcome to HelloWorld App!"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Button title="Press Me" onPress={toggleMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
  },
});
