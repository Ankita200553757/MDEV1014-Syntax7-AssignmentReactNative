
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('./images/logo.png')} />
      <Text style={styles.heading}>Welcome to the Weather App!</Text>
      <Text style={styles.description}>Get the latest weather updates.</Text>  
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',
    backgroundColor:'transparent'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color:'white'
  },
});
export default HomePage;