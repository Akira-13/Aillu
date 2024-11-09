import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import InicioScreen from '../screens/InicioScreen';
import DonationsScreen from '../screens/DonationsScreen';
import ToursScreen from '../screens/ToursScreen';
import StoreScreen from '../screens/StoreScreen';

const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = 'map';
          } else if (route.name === 'Donaciones') {
            iconName = 'heart';
          } else if (route.name === 'Tickets'){
            iconName='ticket' 
          }  else if(route.name == 'Tienda'){
            iconName='basket'
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#256B25',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name = "Tickets" component={ToursScreen} />
      <Tab.Screen name = "Tienda" component={StoreScreen} />
      <Tab.Screen name="Donaciones" component={DonationsScreen} />
    </Tab.Navigator>
  );
}


