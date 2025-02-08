import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import FeteScreen from './screens/FetesScreen';
import EventsScreen from './screens/EventsScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Accueil"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#f4f4f4', // Fond du drawer (changer la couleur)
            width: 240, // Largeur du drawer
          },
          drawerLabelStyle: {
            fontSize: 18, // Taille du texte dans le menu
            fontWeight: 'bold', // Gras pour le texte
          },
          headerStyle: {
            backgroundColor: '#28a745', // Couleur de la barre de header
          },
          headerTintColor: '#fff', // Couleur du texte dans le header
        }}
      >
        <Drawer.Screen name="Accueil" component={HomeScreen} />
        <Drawer.Screen name="Fêtes" component={FeteScreen} />
        <Drawer.Screen name="Anniversaires" component={EventsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
