import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HealthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health</Text>
      <Text>Let's track your health!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
