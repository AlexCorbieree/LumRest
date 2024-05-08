// app.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './modulos/login.jsx';
import Registro from './modulos/registro.jsx';
import Menu from './modulos/menu_escanear.jsx';
import Menu1 from './modulos/menu.jsx';
import OrdenScreen from './modulos/OrdenScreen.jsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="menu_escanear" component={Menu} />
        <Stack.Screen name="Menu1" component={Menu1} />
        <Stack.Screen name="Orden">
          {props => <OrdenScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
