import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

// Dummy Data (later connect this to state / database)

const monthlyIncome = 53000;
const totalSpent = 67000;
const remaining = monthlyIncome-totalSpent;

const categories = [
  { name: "Food", spent: 250, budget:10500},
  { name: "Transport", spent: 100, budget: 200 },
  { name: "Entertainment", spent: 150, budget: 300 },
  { name: "Health", spent: 50, budget: 100 },
];

export default function BudgetScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header Section */} 
      <View style={styles.header}>
        <Text style={styles.title}>Budget & Expenses</Text>
        <Text style={styles.subtitle}>Track your spending and manage your budget</Text>
      </View>

      {/* Add Expense Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>

      {/* Summary Cards */}
      <View style={styles.cardContainer}>
        {/* Monthly Income */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Spent</Text>
          <Text style={styles.cardAmount}>${monthlyIncome}</Text>
          <Text style={styles.cardNote}>This month</Text>
        </View>

        {/* Total Spent */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Spent</Text>
          <Text style={styles.cardAmount}>${totalSpent.toFixed(2)}</Text>
            <Text style={styles.cardNote}>
            {(totalSpent/monthlyIncome * 100).toFixed(1)}% of budget
          </Text>
        </View>

        {/* Remaining */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Remaining</Text>
          <Text style={styles.cardAmount}>${remaining.toFixed(2)}</Text>
          <Text style={styles.cardNote}>Available to spend</Text>
        </View>
      </View>



    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#3B82F6', // blue
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#F9FAFB',
    padding: 15,
    borderRadius: 10,
    width: '30%', // 3 cards in one row
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  cardAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardNote: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
});