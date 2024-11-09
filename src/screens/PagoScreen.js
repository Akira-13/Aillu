import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function InfusionPagoScreen() {
  const navigation = useNavigation();
  const [selectedPayment, setSelectedPayment] = useState(null); 

  const handleSelectPayment = (method) => {
    setSelectedPayment(method); 
  };

  const handleFinalizePurchase = () => {
    navigation.navigate('ComprobantePago'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Detalles de la Compra</Text>

      <View style={styles.purchaseDetails}>
        <Text style={styles.sectionTitle}>Resumen del Producto</Text>
        <Text style={styles.detailText}>Producto: Clavo Huasca</Text>
        <Text style={styles.detailText}>Cantidad: 1 unidad</Text>
        <Text style={styles.detailText}>Precio Unitario: S/ 38.90</Text>
        <Text style={styles.totalText}>Total: S/ 38.90</Text>
      </View>

      <View style={styles.paymentDetails}>
        <Text style={styles.sectionTitle}>Método de Pago</Text>
        
        <TouchableOpacity 
          style={[
            styles.paymentButton,
            selectedPayment === 'credit' && styles.selectedPaymentButton, 
          ]}
          onPress={() => handleSelectPayment('credit')}
        >
          <Text style={[
            styles.paymentText,
            selectedPayment === 'credit' && styles.selectedPaymentText, 
          ]}>
            Tarjeta de Crédito/Débito
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.paymentButton,
            selectedPayment === 'bank' && styles.selectedPaymentButton, 
          ]}
          onPress={() => handleSelectPayment('bank')}
        >
          <Text style={[
            styles.paymentText,
            selectedPayment === 'bank' && styles.selectedPaymentText, 
          ]}>
            Transferencia Bancaria
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.finalizeButton} onPress={handleFinalizePurchase}>
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A7C59',
    marginBottom: 20,
    fontFamily: 'Merriweather_700Bold',
  },
  purchaseDetails: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  paymentDetails: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A7C59',
    marginBottom: 10,
    fontFamily: 'Merriweather_700Bold',
  },
  detailText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  totalText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
    marginTop: 10,
  },
  paymentButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedPaymentButton: {
    borderColor: '#4A7C59', 
  },
  paymentText: {
    fontSize: 16,
    color: '#4A7C59',
  },
  selectedPaymentText: {
    fontWeight: 'bold', 
    color: '#4A7C59',
  },
  finalizeButton: {
    backgroundColor: '#4A7C59',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
