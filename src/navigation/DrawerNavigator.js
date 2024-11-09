
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';  
import MapaPeruScreen from '../screens/MapaPeruScreen';
import ToursScreen from '../screens/ToursScreen';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}  
    >
      <Drawer.Screen name="Mapa" component={MapaPeruScreen} />
      
    </Drawer.Navigator>
  );
}
