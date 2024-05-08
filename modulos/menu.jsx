import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  { id: 1, nombre: 'Hamburguesa', precio: 10.99, especificaciones: 'Con queso, lechuga y tomate.', imagen: require('../img/hamburguesa.jpg') },
  { id: 2, nombre: 'Pizza', precio: 12.99, especificaciones: 'Pizza de pepperoni con extra de queso.', imagen: require('../img/pizza.jpg') },
  { id: 3, nombre: 'Ensalada César', precio: 8.99, especificaciones: 'Lechuga, pollo a la parrilla, aderezo César.', imagen: require('../img/ensalada.jpg') },
  { id: 4, nombre: 'Tacos al pastor', precio: 9.50, especificaciones: 'Tortilla de maíz, carne de cerdo marinada, piña y cilantro.', imagen: require('../img/tacos.jpg') },
  { id: 5, nombre: 'Sushi variado', precio: 15.99, especificaciones: 'Variedad de rollos de sushi con ingredientes frescos.', imagen: require('../img/sushi.jpg') },
  { id: 6, nombre: 'Pasta Alfredo', precio: 11.50, especificaciones: 'Pasta con salsa Alfredo, pollo y champiñones.', imagen: require('../img/pasta.jpg') },
  { id: 7, nombre: 'Burrito de carne asada', precio: 10.75, especificaciones: 'Tortilla de harina, carne asada, arroz, frijoles, queso y salsa.', imagen: require('../img/burrito.jpg') },
  { id: 8, nombre: 'Pollo a la parrilla', precio: 9.99, especificaciones: 'Pechuga de pollo a la parrilla con vegetales asados.', imagen: require('../img/pollo.jpg') },
  { id: 9, nombre: 'Sopa de tortilla', precio: 7.25, especificaciones: 'Sopa con caldo de pollo, tortillas fritas, aguacate y queso.', imagen: require('../img/sopa.jpg') },
  { id: 10, nombre: 'Tarta de manzana', precio: 6.99, especificaciones: 'Deliciosa tarta de manzana casera con helado de vainilla.', imagen: require('../img/tarta.jpg') },
];

const MenuScreen = () => {
  const navigation = useNavigation();

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (platillo) => {
    setCarrito([...carrito, platillo]);
  };

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter(item => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    let total = 0;
    carrito.forEach((platillo) => {
      total += platillo.precio;
    });
    return total.toFixed(2);
  };

  const verOrden = () => {
    navigation.navigate('Orden', { carrito });
  };

  
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagen} style={styles.imagen} />
      <Text style={styles.cardTitle}>{item.nombre}</Text>
      <Text>Precio: ${item.precio.toFixed(2)}</Text>
      <Text>Especificaciones: {item.especificaciones}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => agregarAlCarrito(item)}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
      <View style={styles.cartActions}>
        <Text style={styles.cartItemCount}>Cantidad en el carrito: {carrito.filter(producto => producto.id === item.id).length}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={() => eliminarDelCarrito(item.id)}>
          <Text style={styles.buttonText}>Eliminar 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text style={styles.total}>Costo total: ${calcularTotal()}</Text>

      <TouchableOpacity style={styles.button} onPress={verOrden}>
        <Text style={styles.buttonText}>Ver orden</Text>
      </TouchableOpacity>

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
  imagen: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  cartActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cartItemCount: {
    fontSize: 14,
  },
});

export default MenuScreen;
