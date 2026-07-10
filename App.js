import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from './src/context/ThemeContext';
import Sobre from './src/pages/Sobre/Sobre';
import Home from './src/pages/Home/Home';
import Pedido from './src/pages/Pedido/Pedido';
import Contato from './src/pages/Contato/Contato';
import Usuario from './src/pages/Usuario/Usuario';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: 'none' }
          }}
        >
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Sobre' component={Sobre} />
          <Tab.Screen name='Pedido' component={Pedido} />
          <Tab.Screen name='Contato' component={Contato} />
          <Tab.Screen name='Usuario' component={Usuario} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}