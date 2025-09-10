import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useContext } from "react";

import { MyContext } from "./_layout";

// Cette page a besoin de la fonction feedPet et de l'état hunger pour fonctionner

export default function FoodScreen() {
  // Récupérez la fonction feedPet et l'état hunger depuis votre contexte ici
  const [hunger, setHunger] = useState();
  const [energy, setEnergy] = useState();

  const feedPetWithCheck = () => {
    // Implémentez la logique pour nourrir le PixelPet ici
    setHunger(hunger - 20);
    setEnergy(energy - 5);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nourrir votre PixelPet</Text>
      <TouchableOpacity style={styles.button} onPress={feedPetWithCheck}>
        <Text style={styles.buttonText}>Donner à manger</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
