import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useFonts, Merriweather_900Black, Merriweather_400Regular } from '@expo-google-fonts/merriweather';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';

function ToursScreen() {
    const [fontsLoaded] = useFonts({
        Merriweather_900Black,
        Merriweather_400Regular,
        Roboto_400Regular,
    });

    const navigation = useNavigation();

    if (!fontsLoaded) {
      return <ActivityIndicator size="large" color="#31572C" />;
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>TOURS Y EVENTOS</Text>
        
  
        <View style={styles.card}>
          <ImageBackground
            source={require('../../assets/images/tourBosque.jpg')}
            style={styles.backgroundImage}
            imageStyle={styles.imageStyle} 
          >
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>Tour Bosque de las Nuwas</Text>
              <Text style={styles.subtitle}>Explora un bosque ancestral</Text>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('TourBosque')}
              >
                <Text style={styles.buttonText}>Más información</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

 
        <View style={styles.card}>
          <ImageBackground
            source={require('../../assets/images/tourPasantia.jpg')}
            style={styles.backgroundImage}
            imageStyle={styles.imageStyle}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>Tour Pasantía</Text>
              <Text style={styles.subtitle}>Conoce a un pueblo milenario</Text>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('TourPasantia')}
              >
                <Text style={styles.buttonText}>Más información</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: '100%',
    height: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f8eeee',
    
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    fontFamily: 'Merriweather_900Black',
    color: '#1E4D1E',
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#c6d5c8',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 15,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Merriweather_900Black',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#dddddd',
    fontFamily: 'Roboto_400Regular',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#8f3434',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#f2f2f2',
    fontWeight: 'bold',
    fontFamily: 'Roboto_400Regular',
  },
});

export default ToursScreen;

