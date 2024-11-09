import React from "react";
import { View, Text, FlatList, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const productos = [
    {
      id: '1',
      nombre: 'Nugkutái',
      precio: 'S/ 50.00',
      imagen: require('../../assets/images/01.png'), 
    }, 
    {
      id: '2',
      nombre: 'Mostacilla',
      precio: 'S/ 64.00',
      imagen: require('../../assets/images/02.png'),
    },
    {
        id: '3',
        nombre: 'Nuwa Jengibre',
        precio: 'S/ 38.90',
        imagen: require('../../assets/images/03.png'),
      },
      {
        id: '4',
        nombre: 'Nuwa Clavo Huasca',
        precio: 'S/ 38.90',
        imagen: require('../../assets/images/04.png'),
      },
];

export default function ProductsScreen() {
  const navigation = useNavigation();
  
  const handleFinalizePurchase = () => {
    navigation.navigate('InfusionDetalle'); 
  };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>COMPRAS VOLUNTARIAS</Text>
            <FlatList
                data={productos}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={handleFinalizePurchase}>
                    <View style={styles.productContainer}>
                        <Image source={item.imagen} style={styles.image} />
                        <Text style={styles.name}>{item.nombre}</Text>
                        <Text style={styles.price}>{item.precio}</Text>
                    </View>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      paddingTop: 50,
      padding: 10,
      backgroundColor: '#f8eeee',
    },
    productContainer: {
      width: 150,
      padding: 10,
      backgroundColor: '#fff',
      margin: 5,
      borderRadius: 10,
      alignItems: 'center',
    },
    image: {
      width: 120,
      height: 150,
      marginBottom: 10,
    },
    name: {
      fontSize: 14,
      textAlign: 'center',
    },
    price: {
      fontSize: 16,
      color: '#333',
    },
    title: {
        fontSize: 22,
        marginVertical: 15,
        fontFamily: 'Merriweather_900Black',
        color: '#1E4D1E',
      },
});
