import React from "react";
import { View, Text, FlatList, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';


const hoteles = [
    {
      id: '1',
      nombre: 'Nugkutái',
      imagen: require('../../assets/images/10.png'), 
    }, 
    {
      id: '2',
      nombre: 'Mostacilla',
      imagen: require('../../assets/images/06.png'),
    },
];

export default function HotelesScreen() {
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Hoteles</Text>
            <FlatList
                data={hoteles}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <View style={styles.productContainer}>
                        <Image source={item.imagen} style={styles.image} />
                        <Text style={styles.name}>{item.nombre}</Text>
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
      backgroundColor: '#f0f0f0',
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
    
});