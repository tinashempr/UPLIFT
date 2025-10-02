import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Uplift 🚀</Text>
      <Text style={styles.subtitle}>
        Choose a section to get started:
      </Text>

      <View style={styles.buttonGroup}>
        <Button
          title="Go to Budget"
          onPress={() => navigation.navigate("Budget")}
        />
        <Button
          title="Go to Goals"
          onPress={() => navigation.navigate("Goals")}
        />
        <Button
          title="Go to Health"
          onPress={() => navigation.navigate("Health")}
        />
        <Button
          title="Go to Study"
          onPress={() => navigation.navigate("Study")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // light background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: "#333",
  },
  buttonGroup: {
    width: "80%",
    gap: 10, // spacing between buttons
  },
});
