import {  StyleSheet, Text, View, Image, FlatList, FlatListComponent } from 'react-native';
import ComponentProduct from './ComponentProduct';
import ComponentProductFlat from './ComponentProductFlat';

export default function App(props) {

      const linkImagem = "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-black-dslr-camera-with-large-lens-clipart-illustration-stock-photo-png-image_13758787.png"

  return (
    <View style={styles.container}>

      <ComponentProductFlat/>

    
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
