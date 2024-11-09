import React, { useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function InfusionDetalleScreen() {
  const video = useRef(null);
  const navigation = useNavigation();
  
  const handleFinalizePurchase = () => {
    navigation.navigate('Pago'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video 
          ref={video}
          source={require('../../assets/videos/infusionProceso.mp4')}
          style={styles.video}
          shouldPlay
          useNativeControls
          resizeMode="cover"
          isLooping
        />
      </View>

      <Text style={styles.title}>Clavo Huasca</Text>
      
      <View style={styles.infoContainer}>
        <Image
          source={require('../../assets/images/04.png')}
          style={styles.productImage}
        />
        <Text style={styles.description}>
          Infusión en hebras a base de clavo huasca, en un blend con aguaymanto y canela nativa. El clavo huasca, llamado “tawaip” por el pueblo Awajún, es una liana usada tradicionalmente para aliviar los malestares estomacales y como afrodisíaco.
        </Text>
      </View>

 
      <Text style={styles.price}>Precio: S/38.90</Text>
      <Text style={styles.stock}>Stock disponible</Text>
      
      <TouchableOpacity style={styles.finalizeButton} onPress={handleFinalizePurchase}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    alignItems: 'center',
    paddingTop: 50,
  },
  videoContainer: {
    width: '100%',
    height: 200, 
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Merriweather_900Black',
    color: '#4A7C59',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 15,
  },
  description: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Merriweather_400Regular',
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify',
  },
  price: {
    fontSize: 18,
    color: '#4A7C59',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  stock: {
    fontSize: 14,
    color: '#8bb38c',
    marginBottom: 20,
  },
  finalizeButton: {
    backgroundColor: '#1E4D1E',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
  },
});
