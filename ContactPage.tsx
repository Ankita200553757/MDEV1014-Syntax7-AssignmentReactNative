import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ContactPage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./images/email.png')} />
      <Text style={styles.teamTitle}>About Our Team - Syntax 7</Text>
      <Text style={styles.member}>Salman Hussain Ansari: 200504187@student.georgianc.on.ca</Text>
      <Text style={styles.member}>Jasmeet Singh Bagga: 200555889@student.georgianc.on.ca</Text>
      <Text style={styles.member}>Gurwinder Singh: 200557497@student.georgianc.on.ca</Text>
      <Text style={styles.member}>Navdeep Kaur: 200555412@student.georgianc.on.ca</Text>
      <Text style={styles.member}>Ankita Sharma: 200553757@student.georgianc.on.ca</Text>
      <Text style={styles.member}>Ruchit Rameshbhai Suhagia: 200554055@student.georgianc.on.ca</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100529',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  teamTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  member: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
    textAlign: 'center',
  },
});

export default ContactPage;
