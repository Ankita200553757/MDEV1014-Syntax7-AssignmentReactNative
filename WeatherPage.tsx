// screens/WeatherScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherScreen = () => {
  return (
  
     <View style={styles.container}>
      <Image style={styles.weatherImage} source={require('./images/sunny.png')} />
      <Text style={styles.weatherText}>Today's Weather: Sunny</Text>
      <Text style={styles.temperature}>Temperature: 28°C</Text>
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
  weatherImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  weatherText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 18,
  },
});

export default WeatherScreen;
