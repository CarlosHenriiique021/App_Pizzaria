import { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, FlatListComponent } from 'react-native';
import { Picker } from 'react-native';

export default function ComponentPicker() {
    const [sabor, setSabor] = useState('')
    return (
        <View style={styles.container}>

            <Text> Menu de Pizza </Text>

            <Picker
                selectedValue={sabor}
                onValueChange={(itemValue, itemIndex) => setSabor(itemValue)}>


                <Picker.Item key={1} value='portuguesa' label='portuguesa' />
                <Picker.Item key={2} value='frango_catupiry' label='Frango c/ Catupiry' />
                <Picker.Item key={3} value='queijo' label='4 Queijos' />
                <Picker.Item key={4} value='camarao' label='Camarão' />
            </Picker>

            <Text>
                {sabor === "" ? "Nenhum sabor selecionado"
                    : `Sabor escolhido: ${sabor}`}

            </Text>

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
