import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const faqData = [
  {
    question: 'How can I change my profile photo?',
    answer: 'You can go to the website if you wish to change your profile photo!',
  },
  {
    question: 'How do I change my password?',
    answer: 'You can go to the website if you wish to change your password!',
  },
  {
    question: 'What if I want to delete a friend?',
    answer: 'You can go to the website if you wish to delete a friend!',
  },
  {
    question: 'Why did all my veggies disappear?',
    answer: 'The VegOut! Challenge restarts every calendar month.',
  },
  {
    question: 'Why did my "add this veg" button disappear?',
    answer:
      'You can only track a veggie once. To complete the challenge, you have to track 30 different veggies.',
  },
];

export default function HelpScreen() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Help</Text>
      {faqData.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity onPress={() => toggleExpand(index)}>
            <Text style={styles.question}>{item.question}</Text>
          </TouchableOpacity>
          {expandedIndex === index && <Text style={styles.answer}>{item.answer}</Text>}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  faqItem: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242',
  },
  answer: {
    marginTop: 8,
    fontSize: 14,
    color: '#757575',
  },
});
