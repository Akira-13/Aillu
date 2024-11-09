import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Merriweather_700Bold } from '@expo-google-fonts/merriweather';

export default function ShowtimesScreen() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Merriweather_700Bold,
  });

  if (!fontsLoaded) {
    return null; 
  }

  const handleFinalizePurchase = () => {
    navigation.navigate('TourPago'); 
  };

  const handleScheduleSelect = (time) => {
    setSelectedSchedule(time);
  };

  const horario = {
    name: 'Horarios',
    address: 'Diciembre',
    schedules: ['07/12/24', '08/12/24', '09/12/24'],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tour Pasantía</Text>
      <Image style={styles.image} source={require('../../assets/images/tourPasantia.jpg')} />
      <Text style={styles.description}>
        ¡Descubre la cultura awajún, su gastronomía, la magia de sus tradiciones y los misterios de un bosque ancestral de una forma sostenible!
      </Text>

      <Text style={styles.includedTitle}>¿Qué incluye?</Text>
      <View style={styles.includedList}>
        <Text style={styles.includedItem}>✓ Obsequio de bienvenida</Text>
        <Text style={styles.includedItem}>✓ Ritual para ingresar al bosque</Text>
        <Text style={styles.includedItem}>✓ Caminata y reconocimiento de las plantas medicinales</Text>
      </View>

      <View style={styles.cinemaCard}>
        <View style={styles.header}>
          <Text style={styles.cinemaName}>{horario.name}</Text>
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <Ionicons
              name={isExpanded ? 'remove-circle-outline' : 'add-circle-outline'}
              size={24}
              color="#4A7C59"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.cinemaAddress}>{horario.address}</Text>
        {isExpanded && (
          <View style={styles.scheduleContainer}>
            {horario.schedules.map((time, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.scheduleButton,
                  selectedSchedule === time && styles.selectedScheduleButton,
                ]}
                onPress={() => handleScheduleSelect(time)}
              >
                <Text style={styles.scheduleText}>{time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.finalizeButton} onPress={handleFinalizePurchase}>
        <Text style={styles.buttonText}>COMPRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal:20,
    paddingBottom: 40,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Merriweather_700Bold', 
    marginBottom: 10,
    color: '#4A7C59',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  includedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A7C59',
    marginBottom: 10,
    textAlign: 'left',
  },
  includedList: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  includedItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  cinemaCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cinemaName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e2e2e',
  },
  cinemaAddress: {
    fontSize: 14,
    color: '#6e6e6e',
    marginBottom: 10,
  },
  scheduleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  scheduleButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 5,
  },
  selectedScheduleButton: {
    borderWidth: 2,
    borderColor: '#4A7C59',
    backgroundColor: '#c6d5c8', 
  },
  scheduleText: {
    fontSize: 14,
    color: '#333',
  },
  finalizeButton: {
    backgroundColor: '#4A7C59',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
