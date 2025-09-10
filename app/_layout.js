import { Tabs } from "expo-router";
import { useState, createContext } from "react";

// Créez votre context ici
export const MyContext = createContext();

export default function RootLayout() {
  // Initialisez vos états et fonctions ici
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [energy, setEnergy] = useState(50);

  return (
    // Wrappez les tabs avec votre Provider ici
    <MyContext.Provider
      value={{ hunger, setHunger, happiness, setHappiness, energy, setEnergy }}
    >
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Accueil" }} />
        <Tabs.Screen name="food" options={{ title: "Nourrir" }} />
        <Tabs.Screen name="play" options={{ title: "Jouer" }} />
        <Tabs.Screen name="sleep" options={{ title: "Dormir" }} />
      </Tabs>
    </MyContext.Provider>
  );
}
