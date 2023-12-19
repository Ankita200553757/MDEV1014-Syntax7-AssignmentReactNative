import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './AuthContext';

const AboutPage = ({ navigation }) => {
  const { user, logout } = useAuth();
  const [storedUsername, setStoredUsername] = useState('');
  const [storedEmail, setStoredEmail] = useState('');

  useEffect(() => {
    // Fetch username and email from AsyncStorage
    fetchUserDataFromStorage();
  }, []);

  const fetchUserDataFromStorage = async () => {
    try {
      const username = await AsyncStorage.getItem('username');
      const email = await AsyncStorage.getItem('email');

      // Update the state with fetched data
      setStoredUsername(username);
      setStoredEmail(email);
    } catch (error) {
      console.error('Error fetching data from AsyncStorage:', error);
    }
  };

  const handleLogout = () => {
    // Call your logout function from the authentication context
    logout();
    // Navigate to the login page or any other page
    navigation.reset({
      index: 0,
      routes: [{ name: 'WelcomePage' }],
    });
  };

  return (
    <View style={styles.container}>
      {user && (
        <View>
          <Text style={styles.text}>Name: {user.name}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
        </View>
      )}

      {/* Display stored username and email */}
      {storedUsername && <Text style={styles.text}>Username: {storedUsername}</Text>}
      {storedEmail && <Text style={styles.text}>Email: {storedEmail}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100529',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#100529',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutPage;