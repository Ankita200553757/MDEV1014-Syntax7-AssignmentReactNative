import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutPage = () => {
  return (
    <View style={styles.container}>
         <Image style={styles.logo} source={require('./images/about.png')} />
      <Text style={styles.heading}>About Weather App</Text>
      <Text style={styles.description}>
        Weather App is a mobile application that provides real-time weather information and forecasts for various locations around the world. It allows users to stay updated with the latest weather conditions and plan their activities accordingly.
      </Text>
      <Text style={styles.description}>
        Our team of developers has worked hard to create a user-friendly and reliable weather app that delivers accurate weather data. We aim to provide a seamless experience for users to access important weather information with ease in future.For the time being the data provided in the application is static
      </Text>
      <Text style={styles.description}>
        We are committed to continuously improving the app and adding new features based on user feedback and technological advancements. Our goal is to empower users with the knowledge and insights they need to make informed decisions based on weather conditions.
      </Text>
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
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
});

export default AboutPage;
