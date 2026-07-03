import { StyleSheet, Text, View, Image, FlatList, FlatListComponent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Picker } from 'react-native-web';

const navigation = useNavigation

export default function Sobre() {

    return (
        <View style={styles.container}>

            <Text>Página Sobre</Text>


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
