import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date('2024-12-25T00:00:00'); // Noël
      const currentDate = new Date();
      const timeDiff = targetDate - currentDate;

      if (timeDiff <= 0) {
        clearInterval(interval); // Arrêter le compte à rebours une fois Noël atteint
        setTimeLeft("C'est Noël!");
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        setTimeLeft(`${days}j ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup sur démontage
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compte à Rebours pour Noël</Text>
      <Text style={styles.countdown}>{timeLeft}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centrer verticalement
    alignItems: 'center', // Centrer horizontalement
    marginBottom: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6347', // Rouge de Noël
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed', // Police stylée
  },
  countdown: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2E8B57', // Vert pour Noël
    backgroundColor: '#ECEFF1', // Gris clair pour le fond du compte à rebours
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default HomeScreen;
