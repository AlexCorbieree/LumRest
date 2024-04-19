import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Login from './modulos/login.jsx';
import Registro from './modulos/registro.jsx';
import Menu from './modulos/menu_escanear.jsx';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="menu_escanear" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
