import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';

const veggies = [
  { name: 'Artichoke', image: 'artichoke.jpg' },
  { name: 'Arugula', image: 'arugula.jpg' },
  { name: 'Asparagus', image: 'asparagus.jpg' },
  { name: 'Avocado', image: 'avocado.jpg' },
  { name: 'Bean Sprouts', image: 'beansprouts.jpg' },
  { name: 'Beets', image: 'beets.jpg' },
  { name: 'Bell Peppers', image: 'bell_peppers.jpg' },
  { name: 'Bok Choy', image: 'bok_choy.jpg' },
  { name: 'Broccoli', image: 'broccoli.jpg' },
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressHeader}>MY PROGRESS</Text>
        <Text style={styles.progressValue}>1 / 30</Text>
        <Text style={styles.progressSubtext}>
          Eat 14.5 veggies per day to complete the challenge! The challenge ends in 1 day!
        </Text>
      </View>

      {/* Leaderboard Section */}
      <View style={styles.leaderboardContainer}>
        <View style={styles.leaderboardHeader}>
          <Text style = {styles.dashboardText}>Name</Text>
          <Text style = {styles.dashboardText}>Eaten</Text>
          <Text style = {styles.dashboardText}>Not Eaten</Text>
        </View>
        <FlatList
          data={veggies}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.leaderboardRow}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  progressContainer: {
    backgroundColor: '#E8F5E9',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  progressHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  progressValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#388E3C',
    textAlign: 'center',
  },
  progressSubtext: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
    marginTop: 8,
  },
  leaderboardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    flex: 1,
  },
  leaderboardHeader: {
    backgroundColor: '#441d67',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  leaderboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Vertically centers the items
    paddingVertical: 8,
  },
  text: {
    textAlign: 'left', // Ensures text within each column is centered
    flex: 1, // Allows the text to expand and take up equal space
    fontSize: 20,
  },
  dashboardText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  rank: {
    flex: 1,
  },
  name: {
    flex: 2,
  },
  eaten: {
    flex: 1,
  },
  points: {
    flex: 1,
  },
});
