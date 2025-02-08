import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#28a745', // Vert
    paddingTop: 0, // Retirer l'espace entre la barre et le haut de l'écran
    paddingBottom: 20, // Ajouter un peu de padding en bas de la barre pour centrer le texte
    justifyContent: 'center',
    alignItems: 'center',
    height: 80, // Ajuster la hauteur de la barre si nécessaire
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
