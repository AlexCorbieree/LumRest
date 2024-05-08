import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

// Datos ficticios de platillos
const menuItems = [
  { id: 1, nombre: 'Hamburguesa', precio: 10.99, especificaciones: 'Con queso, lechuga y tomate.' },
  { id: 2, nombre: 'Pizza', precio: 12.99, especificaciones: 'Pizza de pepperoni con extra de queso.' },
  { id: 3, nombre: 'Ensalada César', precio: 8.99, especificaciones: 'Lechuga, pollo a la parrilla, aderezo César.' },
];

const MenuScreen = () => {
  const navigation = useNavigation();

  // Estado para manejar el carrito de compras
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un platillo al carrito
  const agregarAlCarrito = (platillo) => {
    setCarrito([...carrito, platillo]);
  };

  // Función para calcular el costo total del carrito
  const calcularTotal = () => {
    let total = 0;
    carrito.forEach((platillo) => {
      total += platillo.precio;
    });
    return total.toFixed(2);
  };

  // Componente para renderizar cada tarjeta de platillo
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.nombre}</Text>
      <Text>Precio: ${item.precio.toFixed(2)}</Text>
      <Text>Especificaciones: {item.especificaciones}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => agregarAlCarrito(item)}>
        <Text style={styles.buttonText}>Agregar </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Lista de platillos */}
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Mostrar costo total */}
      <Text style={styles.total}>Costo total: ${calcularTotal()}</Text>

      {/* Botón para pedir orden */}
      <TouchableOpacity style={styles.button} onPress={() => console.log("Orden pedida:", carrito)}>
        <Text style={styles.buttonText}>Pedir orden</Text>
      </TouchableOpacity>

      {/* Botón para cancelar la orden */}
      <TouchableOpacity style={styles.button} onPress={() => setCarrito([])}>
        <Text style={styles.buttonText}>Cancelar orden</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: '#003f5c',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#003f5c',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default MenuScreen;

