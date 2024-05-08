import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

const OrdenScreen = ({ route, navigation }) => {
  // Obtener los datos del carrito de los parámetros de la ruta
  const { carrito } = route.params;

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter(item => item.id !== id);
    navigation.setParams({ carrito: nuevoCarrito });
  };

  const crearOrden = () => {
    Alert.alert('Orden Creada', '¡Tu orden ha sido creada con éxito!');
    console.log(carrito);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orden:</Text>
      <View style={styles.itemsContainer}>
        {/* Renderizar los elementos del carrito */}
        {carrito.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={item.imagen} style={styles.imagen} />
            <Text>{item.nombre} - ${item.precio.toFixed(2)}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => eliminarDelCarrito(item.id)}>
              <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.createOrderButton} onPress={crearOrden}>
        <Text style={styles.createOrderButtonText}>Crear Orden</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeButtonText}>Cerrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemsContainer: {
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagen: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: '#003f5c',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createOrderButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  createOrderButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrdenScreen;
