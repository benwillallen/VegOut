import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/logo.png' }} // Replace with your actual logo URL
          style={styles.logo}
        />
        <Text style={styles.title}>Recipe for Success Foundation</Text>
      </View>
      <Text style={styles.subtitle}>What is Recipe for Success?</Text>
      <Text style={styles.description}>
        Recipe for Success Foundation is dedicated to combating childhood obesity by changing the
        way our children understand, appreciate, and eat their food. We educate and mobilize the
        community to provide healthier diets for children.
      </Text>
      <Image
        source={{ uri: 'https://example.com/children-photo.png' }} // Replace with the correct image URL
        style={styles.image}
      />
      <Text style={styles.description}>
        We envision a world where healthy eating is the norm and a culture where nutritious food is
        shared, appreciated, and celebrated.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Learn more about RFS!" onPress={() => console.log('Navigate to RFS')} />
        <Button title="Go to the VegOut website!" onPress={() => console.log('Navigate to VegOut')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
