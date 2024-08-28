// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Animated } from 'react-native';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [scaleValue] = useState(new Animated.Value(1));

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }

    // Display the entered email and password
    Alert.alert('Login Info', `Email: ${email}\nPassword: ${password}`);
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          animateButton();
          handleLogin();
        }}
      >
        <Animated.Text style={[styles.buttonText, { transform: [{ scale: scaleValue }] }]}>
          Login
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#ff69b4', // Neon pink
    shadowColor: '#000000', // Black shadow
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
  },
  header: {
    fontSize: 48, // Huge text
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#32cd32', // Lime green
    textAlign: 'center',
    textShadowColor: '#ff4500', // Orange shadow
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 20,
  },
  input: {
    height: 60, // Large height
    borderColor: '#ff6347', // Tomato red
    borderWidth: 5,
    borderRadius: 20,
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#ffff00', // Yellow background
    fontSize: 24, // Large font size
    color: '#0000ff', // Blue text
    shadowColor: '#000000', // Black shadow
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  button: {
    backgroundColor: '#a52a2a', // Brown
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000000', // Black shadow
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 25,
  },
  buttonText: {
    color: '#ffffff', // White text
    fontSize: 36, // Very large text
    fontWeight: 'bold',
  },
});

export default Login;
