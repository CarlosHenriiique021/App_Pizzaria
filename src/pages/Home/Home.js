import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, FlatListComponent, Button, TouchableOpacity } from 'react-native';
import { Picker, ScrollView } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import ComponentPicker from '../../components/ComponentPicker';


export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <ScrollView>
                <View style={styles.container2}>

                    <View style={styles.textView1}>
                        <Text style={styles.text}> Temos a pizza mais gostoso do Rio de Janeiro!</Text>
                    </View>

                    <View style={styles.containerPizza}>

                        <Image
                            source={{ uri: "https://cms-blog.saipos.com/propaganda-delivery-de-pizza-SAIPOS-sistema-para-restaurante.png" }}
                            style={{ width: '80%', height: '80%' }}
                            resizeMode='contain'
                        />

                    </View>

                    <View style={styles.textView2}>
                        <Text style={styles.text}> Se delicie com nossos incríveis sabores de Pizza!</Text>
                    </View>

                    <View>
                        <View>
                            <ComponentPicker />
                        </View>

                        <View>

                        </View>
                    </View>

                    <View style={styles.buttonPizza}>
                        <TouchableOpacity>
                            <View>
                                <Text title="Ir para página sobre" onPress={() => navigation.navigate('Sobre')} style={styles.textButtonPizza}>Clique Aqui</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#686767',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container2: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerPizza: {
        width: 700,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerButton: {
   
    },

    buttonPizza: {
        backgroundColor: '#00f7ff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 80
    },

    textButtonPizza: {
        fontSize: 20,
        textAlign: 'center',
    },

    text: {
        fontSize: 25,
        borderRadius: 8,
        textAlign: 'center',
        backgroundColor: 'blue',

    },

    textView1: {
        marginTop: 50,
        borderRadius: 8,
        marginBottom: -40
    },

    textView2: {
        marginTop: -40,
        marginBottom: 60,
        borderRadius: 8,
    }
});
