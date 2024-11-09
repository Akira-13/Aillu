import React from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFonts, Merriweather_900Black, Merriweather_400Regular } from '@expo-google-fonts/merriweather';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

export default function DonationsScreen() {
  const [amount, setAmount] = React.useState('');
  const [selectedAmount, setSelectedAmount] = React.useState(null);

  const [fontsLoaded] = useFonts({
    Merriweather_900Black,
    Merriweather_400Regular,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#31572C" />;
  }

  const handleSelectAmount = (value) => {
    setSelectedAmount(value);
    setAmount(value.toString());
  };

  const handleDonate = () => {
    alert(`Gracias por tu donación de S/ ${amount}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DONACIÓN VOLUNTARIA</Text>
      <Image source={require('../../assets/images/06.png')} style={styles.image} />
      <Text style={styles.description}>
        Con tu apoyo, podemos continuar con la conservación del Bosque de las Nuwas y preservar el conocimiento ancestral de esta comunidad. ¡Gracias por ser parte de este esfuerzo!
      </Text>

      <Text style={styles.subtitle}>Elige un monto:</Text>
      <View style={styles.amountContainer}>
        {[10, 20, 50, 100].map((value) => (
          <TouchableOpacity 
            key={value} 
            style={[styles.amountButton, selectedAmount === value && styles.selectedAmountButton]}
            onPress={() => handleSelectAmount(value)}
          >
            <Text style={[styles.amountText, selectedAmount === value && styles.selectedAmountText]}>S/ {value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Otro monto"
        placeholderTextColor="#777"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity style={styles.donateButton} onPress={handleDonate}>
        <Text style={styles.donateButtonText}>Donar Ahora</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8eeee',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Merriweather_900Black',
    color: '#1E4D1E',
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Merriweather_400Regular',
    color: '#333',
    textAlign: 'justify',
    marginBottom: 20,
    lineHeight: 22,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    color: '#1E4D1E',
    marginBottom: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  amountButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#4A7C59',
  },
  selectedAmountButton: {
    backgroundColor: '#8f3434',
  },
  amountText: {
    fontSize: 14,
    color: '#4A7C59',
  },
  selectedAmountText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#4A7C59',
    fontSize: 15,
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  donateButton: {
    backgroundColor: '#1E4D1E',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  donateButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontFamily: 'Roboto_400Regular',
  },
});
