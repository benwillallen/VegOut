import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const USDA_API_KEY = 'FK6br8KFdprFR1P7vDJ1ZspGZHIjq1H6CWx2fcgU';

interface VegetableAutocompleteProps {
  onSelect: (item: any) => void; 
}

export default function VegetableAutocomplete({ onSelect }: VegetableAutocompleteProps) {
  const [query, setQuery] = useState('');

  interface FoodItem {
    fdcId: number;
    description: string;
  }

  const [results, setResults] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchVegetables = async (search: string) => {
    if (!search) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${search}&dataType=Foundation,SR%20Legacy&api_key=${USDA_API_KEY}`
      );
      const data = await res.json();
      setResults(data.foods || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchVegetables(query);
    }, 300); 
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type a vegetable (e.g., broccoli)"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
        placeholderTextColor="#888"
      />
      {loading && <Text style={styles.loading}>Searching...</Text>}
      <FlatList
        data={results}
        keyExtractor={(item) => item.fdcId.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.result}
            onPress={() => {
              onSelect(item); 
              setQuery('');
              setResults([]);
            }}
          >
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#AAA',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
    marginTop:-20,
  },
  loading: {
    marginTop: 8,
    fontStyle: 'italic',
    color: '#555',
  },
  result: {
    padding: 10,
    backgroundColor: '#F3F3F3',
    marginTop: 0,
    borderRadius: 5,
  },
});
