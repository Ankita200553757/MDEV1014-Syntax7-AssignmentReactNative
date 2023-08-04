import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ForecastPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.forecastItem}>
        <Text style={[styles.forecastDay, { color: 'white' }]}>Monday</Text>
        <Image style={styles.forecastIcon} source={require('./images/sunny.png')} />
        <Text style={{ color: 'white' }}>Sunny</Text>
        <Text style={{ color: 'white' }}>28°C</Text>
      </View>
      <View style={styles.forecastItem}>
        <Text style={[styles.forecastDay, { color: 'white' }]}>Tuesday</Text>
        <Image style={styles.forecastIcon} source={require('./images/cloudy.png')} />
        <Text style={{ color: 'white' }}>Cloudy</Text>
        <Text style={{ color: 'white' }}>24°C</Text>
      </View>
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
  forecastItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  forecastDay: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  forecastIcon: {
    width: 250,
    height: 250,
    marginBottom: 5,
  },
});

export default ForecastPage;