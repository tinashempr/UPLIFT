import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SCreens (ensure default export in each file)
import HomeScreen from './src/screens/Home';
import BudgetScreen from './src/screens/Budget';
import GoalsScreen from './src/screens/Goals';
import HealthScreen from './src/screens/Health';
import StudyScreen from './src/screens/Study';


const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginTop: 10 }
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Budget" component={BudgetScreen} />
        <Tab.Screen name="Goals" component={GoalsScreen} />
        <Tab.Screen name="Health" component={HealthScreen} />
        <Tab.Screen name="Study" component={StudyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


