import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ComprobanteDePagoScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.thankYouText}>¡Muchas gracias!</Text>
      <FontAwesome5 name="check-circle" size={48} color="#4A7C59" style={styles.icon} />
      
      <View style={styles.qrContainer}>
        <Image source={require('../../assets/images/frame.png')} style={styles.qrImage} />
      </View>

      <View style={styles.detailsContainer}>
        
        <Text style={styles.detailText}>Nombre: Ariana Lopez</Text>
        <Text style={styles.detailText}>Fecha: 10 de noviembre de 2024</Text>
        <Text style={styles.detailText}>Código: Q4213G</Text>
      </View>

     
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.buttonText}>Descargar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.downloadButton} onPress={() => navigation.reset({
  index: 1, 
  routes: [{ name: 'Tabs' }], 
})

}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f2e0',
    alignItems: 'center',
  },
  thankYouText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A7C59',
    marginTop: 30,
    marginBottom: 10,
  },
  icon: {
    marginBottom: 20,
  },
  qrContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  qrImage: {
    width: 150,
    height: 150,
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  detailText: {
    fontSize: 16,
    color: '#333333',
    marginVertical: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  recommendButton: {
    backgroundColor: '#c2e5c2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  downloadButton: {
    backgroundColor: '#4A7C59',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 18,
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
