import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Registro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Registro</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Correo electrónico"
          placeholderTextColor="#757575" // Gris claro
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nombre"
          placeholderTextColor="#757575" // Gris claro
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Contraseña"
          placeholderTextColor="#757575" // Gris claro
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Verificar contraseña"
          placeholderTextColor="#757575" // Gris claro
        />
      </View>
      <TouchableOpacity style={styles.registroBtn}>
        <Text style={styles.registroText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Gris claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#EF5350', // Rojo claro
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#FFFFFF', // Blanco
    borderColor: '#BDBDBD', // Gris
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#212121', // Negro
  },
  registroBtn: {
    width: '80%',
    backgroundColor: '#EF5350', // Rojo claro
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  registroText: {
    color: '#FFFFFF', // Blanco
  },
});

export default Registro;
