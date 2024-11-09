import React, { useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Video } from 'expo-av';
import { useFonts, Merriweather_900Black, Merriweather_400Regular } from '@expo-google-fonts/merriweather';
import { Roboto_400Regular } from '@expo-google-fonts/roboto'; 
import { FontAwesome5 } from '@expo/vector-icons';

export default function InicioScreen() {
  const video = useRef(null);
  const [fontsLoaded] = useFonts({
    Merriweather_900Black,
    Merriweather_400Regular,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#31572C" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video 
          ref={video}
          source={require('../../assets/videos/BosqueDeLasNuwas.mp4')}
          style={styles.video}
          shouldPlay={true}
          useNativeControls
          resizeMode="cover"
          isLooping
        />
      </View>
      
      <Text style={styles.title}>BOSQUE DE LAS NUWAS</Text>
      
      <Text style={styles.description}>
      Adéntrate en el Bosque de las Nuwas, un refugio ancestral en Shampuyacu donde las mujeres indígenas preservan el conocimiento de sus abuelas. Entre majestuosos árboles y plantas medicinales, estas guardianas del bosque te guiarán en un viaje único de conexión con la Amazonía, a través de cantos, danzas y saberes ancestrales.
      </Text>
      
      <View style={styles.infoContainer}>
        <FontAwesome5 name="clock" size={20} color="#f2f2f2" style={styles.icon} />
        <Text style={styles.iconText}>Lun - Vier / 08:00 - 17:00</Text>
      </View>
      <View style={styles.infoContainer}>
        <FontAwesome5 name="phone" size={20} color="#f2f2f2" style={styles.icon} />
        <Text style={styles.iconText}> (+51) 983 345 857</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8eeee',
    alignItems: 'center',
    padding: 20,
    
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
    fontSize: 22,
    fontFamily: 'Merriweather_900Black',
    color: '#1E4D1E',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    fontFamily: 'Merriweather_400Regular',
    color: '#000000',
    textAlign: 'justify',
    lineHeight: 28,
    marginBottom: 25,
  },
  infoContainer: {
    flexDirection: 'row',
    backgroundColor: '#8f3434',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  iconText: {
    fontSize: 18,
    color: '#f2f2f2',
    fontFamily: 'Roboto_400Regular',
  },
});

