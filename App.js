import { StyleSheet, Text, View, Image, FlatList, FlatListComponent } from 'react-native';
import { Picker } from 'react-native-web';

import ComponentProductFlat from './src/components/ComponentProductFlat';
import ComponentPicker from './src/components/ComponentPicker';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sobre from './src/pages/Sobre/Sobre';
import Home from './src/pages/Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Sobre' component={Sobre}/>

        </Stack.Navigator>

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
