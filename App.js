import { StyleSheet, Text, View, Image, FlatList, FlatListComponent } from 'react-native';
import { Picker } from 'react-native-web';

import ComponentProductFlat from './src/components/ComponentProductFlat';
import ComponentPicker from './src/components/ComponentPicker';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons'

import Sobre from './src/pages/Sobre/Sobre';
import Home from './src/pages/Home/Home';

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
