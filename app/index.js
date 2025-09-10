import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

// Cette page a besoin des états hunger, happiness et energy pour fonctionner


export default function Home() {
  // Récupérez les états depuis votre contexte ici

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PixelPet</Text>
      {/* Affichez les stats du PixelPet ici */}
      <Text style={styles.status}>?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: "bold",
  },
});
