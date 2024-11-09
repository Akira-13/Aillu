import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapaPeruScreen from '../screens/MapaPeruScreen';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator'; 
import ToursScreen from '../screens/ToursScreen';
import ToursPasantiaScreen from '../screens/ToursPasantiaScreen';
import PagoScreen from '../screens/PagoScreen';
import ComprobanteDePagoScreen from '../screens/ComprobanteDePagoScreen';
import InfusionDetalleScreen from '../screens/InfusionDetalleScreen';
import TourPagoScreen from '../screens/TourPagoScreen';
const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="MapaPeru">
      <Stack.Screen
        name="MapaPeru"
        component={DrawerNavigator} 
        options={({ navigation }) => ({
            headerShown: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Ionicons name="menu" size={24} color="black" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="TourPasantia"
        component={ToursPasantiaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TourBosque"
        component={ToursPasantiaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pago"
        component={PagoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ComprobantePago"
        component={ComprobanteDePagoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InfusionDetalle"
        component={InfusionDetalleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TourPago"
        component={TourPagoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
