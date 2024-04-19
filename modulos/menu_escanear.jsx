import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

const menu_escanear = () => {
  const navigation = useNavigation();

  const abrirEscanerQR = () => {
    // Aquí puedes agregar la lógica para abrir el escáner de código QR
    // Por ahora, solo mostramos un mensaje en la consola
    console.log("Abriendo escáner de código QR...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Gracias por usar LumRest</Text>
      <TouchableOpacity style={styles.scanMenuBtn}>
        <Text style={styles.btnText}>Escanear código QR para desplegar el menú</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 24,
    marginBottom: 20,
  },
  scanMenuBtn: {
    backgroundColor: '#003f5c',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  scanQRBtn: {
    backgroundColor: '#fb5b5a',
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default menu_escanear;