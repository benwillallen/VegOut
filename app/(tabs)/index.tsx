import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const leaderboardData = [
  { rank: 1, name: 'Gracie', eaten: 1, points: 12960 },
  { rank: 2, name: 'Anisha', eaten: 0, points: 1200 },
  { rank: 3, name: 'greenkoi', eaten: 0, points: 0 }, 
  { rank: 4, name: 'Bornhayn07', eaten: 0, points: 0 },
  { rank: 5, name: 'Michael Pearce', eaten: 0, points: 0 },
  { rank: 6, name: 'Anna Eastman', eaten: 0, points: 0 },
  { rank: 7, name: 'Spencer Sutton', eaten: 0, points: 675 },
  { rank: 8, name: 'Michael Swail', eaten: 0, points: 0 },
  { rank: 9, name: 'Allison', eaten: 0, points: 0 },
  { rank: 10, name: 'Debrah', eaten: 0, points: 1200 },
];

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
        <Text style={styles.leaderboardHeader}>Friends Leaderboard</Text>
        <FlatList
          data={leaderboardData}
          keyExtractor={(item) => item.rank.toString()}
          renderItem={({ item }) => (
            <View style={styles.leaderboardRow}>
              <Text style={[styles.text, styles.rank]}>{item.rank}</Text>
              <Text style={[styles.text, styles.name]}>{item.name}</Text>
              <Text style={[styles.text, styles.eaten]}>{item.eaten} / 30</Text>
              <Text style={[styles.text, styles.points]}>{item.points}</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#424242',
    textAlign: 'center',
  },
  leaderboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Vertically centers the items
    paddingVertical: 8,
  },
  text: {
    textAlign: 'center', // Ensures text within each column is centered
    flex: 1, // Allows the text to expand and take up equal space
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
