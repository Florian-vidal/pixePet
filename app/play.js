import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";

import { MyContext } from "./_layout";

// Cette page a besoin de la fonction playWithPet et de l'état energy pour fonctionner

export default function PlayScreen() {
  // Récupérez la fonction playWithPet et l'état energy depuis votre contexte ici
    const { energy, setEnergy, happiness, setHappiness } = useContext(MyContext);

  const playGame = () => {
    // Implémentez la logique pour jouer avec le PixelPet ici
    setHappiness(happiness + 15)
    setEnergy(energy - 10)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jouer avec votre PixelPet</Text>
      <TouchableOpacity style={styles.button} onPress={playGame}>
        <Text style={styles.buttonText}>Lancer la balle</Text>
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
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
