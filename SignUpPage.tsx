import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

const SignUpPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Mock user credentials
    const mockEmail = 'test@example.com';
    const mockPassword = '123456';

    // Check if the input credentials match the mock credentials
    if (email === mockEmail && password === mockPassword) {
      // If credentials match, show a success message and navigate to SignInPage
      Alert.alert('Sign Up Successful', 'Welcome to the app!');
      navigation.navigate('SignIn');
    } else {
      // If credentials don't match, show an error message
      Alert.alert('Error', 'Invalid email or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#100529"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#100529"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    fontSize: 16,
    color: '#100529',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#100529',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpPage;