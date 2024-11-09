
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/icon.png')} // Cambia esta ruta a la ubicación de tu logo
          style={styles.logo}
        /><Text style={styles.appName}>CONECTANDO COMUNIDADES, COMPARTIENDO CULTURA</Text>
        
      </View>
      
      
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 10,
  },
  logo: {
    width: 100,  
    height: 100,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  appName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A7C59',  
    alignContent:'center',
  },
});
