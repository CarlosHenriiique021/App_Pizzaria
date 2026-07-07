import { StyleSheet, Text, View, Image, FlatList, FlatListComponent } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { Picker } from 'react-native-web';
import { useState } from 'react';


import ComponentProductFlat from './src/components/ComponentProductFlat';
import ComponentPicker from './src/components/ComponentPicker';
import ComponentStorage from './src/components/ComponentStorage';
import AsyncStorage from "@react-native-async-storage/async-storage"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Sobre from './src/pages/Sobre/Sobre';
import Home from './src/pages/Home/Home';
import Pedido from './src/pages/Pedido/Pedido';
import Contato from './src/pages/Contato/Contato';
import Usuario from './src/pages/Usuario/Usuario';

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={Home}
        />

        <Tab.Screen
          name='Sobre'
          component={Sobre}
        />

        <Tab.Screen
          name='Pedido'
          component={Pedido}
        />

        <Tab.Screen
          name='Contato'
          component={Contato}
        />

        <Tab.Screen
          name='Usuario'
          component={Usuario}
        />

      </Tab.Navigator>


    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
