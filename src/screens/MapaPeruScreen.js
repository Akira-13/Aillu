import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

export default function MapaPeruScreen() {
  const mapRef = useRef(null);
  const navigation = useNavigation();
  const [showBosqueMarker, setShowBosqueMarker] = useState(false);

  const peruRegion = {
    latitude: -9.19,
    longitude: -75.0152,
    latitudeDelta: 10.0,
    longitudeDelta: 13.0,
  };

  const sanMartinRegion = {
    latitude: -6.4474,
    longitude: -76.2638,
    latitudeDelta: 1.5,
    longitudeDelta: 1.5,
  };

  const bosqueDeLasNuwas = {
    latitude: -6.4528,
    longitude: -76.3836,
  };

  
  const handleSanMartinPress = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(sanMartinRegion, 1000);
   
      setTimeout(() => {
        setShowBosqueMarker(true);
      }, 1000); 
    }
  };

  const handleBosquePress = () => {
    navigation.navigate('Tabs');
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={peruRegion}
      >
        
        <Marker
          coordinate={{ latitude: -12.0464, longitude: -77.0428 }}
          title="Lima"
          description="Capital de Perú"
        >
          <Callout tooltip>
            <View style={styles.calloutContainer}>
              <Image
                source={require('../../assets/images/lima.jpg')} 
                style={styles.calloutImage}
              />
              <Text style={styles.calloutTitle}>Lima</Text>
              <Text style={styles.calloutDescription}>Capital de Perú</Text>
            </View>
          </Callout>
        </Marker>

        <Marker
          coordinate={{ latitude: -5.2153, longitude: -80.6260 }}
          title="Piura"
          description="Comunidad de Narihualá, legado de los Tallanes"
        >
          <Callout tooltip>
            <View style={styles.calloutContainer}>
              <Image
                source={require('../../assets/images/piura.jpg')} 
                style={styles.calloutImage}
              />
              <Text style={styles.calloutTitle}>Piura</Text>
              <Text style={styles.calloutDescription}>Costa del Perú</Text>
            </View>
          </Callout>
        </Marker>

 
        <Marker
          coordinate={{ latitude: -9.3438, longitude: -77.6067 }}
          title="Ancash"
          description="Sierra del Perú"
        >
          <Callout tooltip>
            <View style={styles.calloutContainer}>
              <Image
                source={require('../../assets/images/ancash.jpg')} 
                style={styles.calloutImage}
              />
              <Text style={styles.calloutTitle}>Ancash</Text>
              <Text style={styles.calloutDescription}>Sierra del Perú</Text>
            </View>
          </Callout>
        </Marker>

    
        <Marker
          coordinate={{ latitude: -6.4474, longitude: -76.2638 }}
          title="San Martín"
          description="Departamento de San Martín"
        > 
          <Callout tooltip>
            <TouchableOpacity onPress={handleSanMartinPress}>
              <View style={styles.calloutContainer}>
                <Image
                  source={require('../../assets/images/sanMartin.jpg')} 
                  style={styles.calloutImage}
                />
                <Text style={styles.calloutTitle}>San Martin</Text>
                <Text style={styles.calloutDescription}>Selva del Perú</Text>
              </View>
            </TouchableOpacity>
          </Callout>
        </Marker>

        
        {showBosqueMarker && (
          <Marker
            coordinate={bosqueDeLasNuwas}
            title="Bosque de las Nuwas"
            description="Preservado por una comunidad femenina"
            pinColor="blue"
          > 
            <Callout tooltip>
              <TouchableOpacity onPress={handleBosquePress}>
                <View style={styles.calloutContainer}>
                  <Image
                    source={require('../../assets/images/bosque.jpg')} 
                    style={styles.calloutImage}
                  />
                  <Text style={styles.calloutTitle}>Bosque de las Nuwas</Text>
                  <Text style={styles.calloutDescription}>Preservado por una comunidad femenina</Text>
                </View>
              </TouchableOpacity>
            </Callout>
          </Marker>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  calloutContainer: {
    width: 200,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  calloutImage: {
    width: 180,
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A7C59',
  },
  calloutDescription: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});
