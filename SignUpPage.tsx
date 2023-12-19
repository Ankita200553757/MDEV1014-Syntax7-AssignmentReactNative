// SignUpPage.js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthViewModel from './AuthViewModel';
import { useAuth } from './AuthContext';

const SignUpPage = ({ navigation, onSignupSuccess }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignUp = async () => {
    console.log('Sign Up button pressed');
    if (email && password && username.length >= 3) {
      try {
        console.log('Calling AuthViewModel.signUp');
        await AuthViewModel.signUp(email, password, username);
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('email', email);
        Alert.alert('Sign Up Successful', 'Welcome to the app!');
        // Automatically sign in the user after signing up
        console.log('Calling AuthViewModel.signIn');
        await AuthViewModel.signIn(username, password, login);
        console.log('Sign in successful');
        onSignupSuccess();
        navigation.navigate('Home');
      } catch (error) {
        console.error('Sign Up Error:', error);
        // Handle the error
      }
    } else {
      console.log('Invalid input fields');
      Alert.alert('Error', 'Please enter valid email, password, and a username with at least 3 characters.');
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
      <TextInput
        style={styles.input}
        placeholder="Username (min 3 characters)"
        placeholderTextColor="#100529"
        onChangeText={(text) => setUsername(text)}
        value={username}
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
