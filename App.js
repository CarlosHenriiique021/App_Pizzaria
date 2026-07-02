import {  StyleSheet, Text, View, Image, FlatList, FlatListComponent } from 'react-native';
import { Picker } from 'react-native-web';
import ComponentProductFlat from './src/components/ComponentProductFlat';
import ComponentPicker from './src/components/ComponentPicker';

export default function App() {

  return (
    <View style={styles.container}>

      <ComponentPicker/>

    
    </View>
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
