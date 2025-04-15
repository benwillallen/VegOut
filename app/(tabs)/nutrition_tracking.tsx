import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextStyle,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { set } from 'mongoose';

interface Veggie {
  name: string;
  image: string;
  description: string;
  rating: number;
}

export default function HomeScreen() {
  const [active, setActive] = useState<'name' | 'eaten' | 'notEaten' | null>('name');
  const [veggies, setVeggies] = useState<Veggie[]>([]);
  const [names, setNames] = useState<Veggie[]>([]);
  const [eaten, setEaten] = useState<Veggie[]>([]);
  const [notEaten, setNotEaten] = useState<Veggie[]>([]);

  const fetchVeggies = async () => {
    try {
      const res = await axios.get('http://localhost:3000/vegetables');
      setVeggies(res.data);
      setNames(res.data);
      setNotEaten(res.data);
    } catch (err) {
      console.error('Failed to fetch veggies:', err);
    }
  };

  useEffect(() => {
    fetchVeggies();
  }, []);

  useEffect(() => {
    switch (active) {
      case 'name':
        setVeggies(names);
        break;
      case 'eaten':
        setVeggies(eaten);
        break;
      case 'notEaten':
        setVeggies(notEaten);
        break;
      default:
        setVeggies(names);
        break;
    }
  }, [active, eaten]);


  const getStyle = (key: string) => ({
    color: 'white',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 4, 
    borderBottomWidth: active === key ? 2 : 0,
    borderBottomColor: active === key ? 'white' : 'transparent',
    fontWeight: active === key ? '700' as TextStyle['fontWeight'] : '400' as TextStyle['fontWeight'],
  });

  const handleAdd = (item: Veggie) => {
    const isAlreadyEaten = eaten.some((veggie) => veggie.name === item.name);
    if (isAlreadyEaten) {
      alert('You have already eaten this veggie!');
      return;
    }
    setEaten((prev) => [...prev, item]);
    setNotEaten((prev) => prev.filter((veggie) => veggie.name !== item.name));
  }

  const handleRemove = (item: Veggie) => {
    setEaten((prev) => prev.filter((veggie) => veggie.name !== item.name));
    setNotEaten((prev) => [...prev, item]);
  }

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
          
          <TouchableOpacity onPress={() => setActive('name')}>
            <Text style={getStyle('name')}>Name</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActive('eaten')}>
            <Text style={getStyle('eaten')}>Eaten</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActive('notEaten')}>
            <Text style={getStyle('notEaten')}>Not Eaten</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={veggies}
          keyExtractor={(item) => item.name}
          style={{ height: 500 }} 
          renderItem={({ item }) => (
            <View style={styles.leaderboardRow}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
              <Text style={styles.text}>{item.name}</Text>
              {active === 'name' && (
                <>
                  <TouchableOpacity onPress={() => handleAdd(item)}>
                    <Feather name="plus" size={28} color="#388E3C" />
                  </TouchableOpacity>
                </>
              )}
              {active === 'eaten' && (
                <>
                  <TouchableOpacity onPress={() => handleRemove(item)}>
                    <Feather name="x" size={28} color="#FF0000" />
                  </TouchableOpacity>
                </>
              )}
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
    marginBottom:50,
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
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', // Light gray line between rows
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
