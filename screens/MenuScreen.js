import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { styles } from '../styles/commonStyles';

const MenuScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.content}>
      <Text>Menu</Text>
      <Button
        title="Accueil"
        onPress={() => navigation.navigate('Accueil')}
      />
      <Button
        title="Page Fête"
        onPress={() => navigation.navigate('Fete')}
      />
    </View>
  </SafeAreaView>
);

export default MenuScreen;
