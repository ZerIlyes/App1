import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

const PokemonValueApp = () => {
  const [cardName, setCardName] = useState('');
  const [cardValue, setCardValue] = useState('');
  const [portfolio, setPortfolio] = useState([]);

  const addCardToPortfolio = () => {
    if (cardName && cardValue) {
      setPortfolio([...portfolio, { name: cardName, value: parseFloat(cardValue) }]);
      setCardName('');
      setCardValue('');
    }
  };

  const calculateTotalValue = () => {
    return portfolio.reduce((total, card) => total + card.value, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokémon Card Value Estimator</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Name"
        value={cardName}
        onChangeText={setCardName}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Value (€)"
        keyboardType="numeric"
        value={cardValue}
        onChangeText={setCardValue}
      />
      <Button title="Add to Portfolio" onPress={addCardToPortfolio} />
      <Text style={styles.subtitle}>Portfolio:</Text>
      <FlatList
        data={portfolio}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.cardItem}>
            {item.name}: {item.value} €
          </Text>
        )}
      />
      <Text style={styles.totalValue}>
        Total Value: {calculateTotalValue()} €
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  cardItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default PokemonValueApp;
