import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; 
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LumRest</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Correo electrónico"
          placeholderTextColor="#757575" // Gris claro
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Contraseña"
          placeholderTextColor="#757575" // Gris claro
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('menu_escanear')} style={styles.loginBtn}>
        <Text style={styles.loginText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.signup}>Crear una cuenta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
    fontSize: 50,
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
  loginBtn: {
    width: '80%',
    backgroundColor: '#EF5350', // Rojo claro
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: '#FFFFFF', // Blanco
  },
  forgot: {
    color: '#EF5350', // Rojo claro
    fontSize: 11,
  },
  signup: {
    color: '#212121', // Negro
    fontSize: 11,
  },
});

export default Login;
