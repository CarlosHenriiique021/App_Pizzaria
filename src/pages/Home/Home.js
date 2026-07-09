import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, FlatListComponent, Button, TouchableOpacity } from 'react-native';
import { Picker, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ComponentPicker from '../../components/ComponentPicker';
import ComponentStorage from '../../components/ComponentStorage';


export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <ScrollView>
                <View style={styles.container2}>

                    <View style={styles.testeView}>
                        <View style={styles.botao}><Text title="Ir para página home" onPress={() => navigation.navigate('Home')}>Home</Text></View>
                        <View style={styles.botao}><Text title="Ir para página sobre" onPress={() => navigation.navigate('Sobre')}>Sobre</Text></View>
                        <View style={styles.botao}><Text title="Ir para página pedidos" onPress={() => navigation.navigate('Pedido')}>Pedido</Text></View>
                        <View style={styles.botao}><Text title="Ir para página pedidos" onPress={() => navigation.navigate('Contato')}>Contato</Text></View>
                    </View>

                    <View style={styles.testeView2}>
                        <Text style={styles.text}> Temos a pizza mais gostosa do Rio de Janeiro!</Text>
                    </View>

                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../../assets/Pizzaria/Home.png')}
                            style={{
                                width: '100%',
                                maxWidth: 450,       // Mantém uma largura excelente na tela do PC
                                height: 600,         // Define uma altura fixa para o panfleto aparecer inteiro
                                alignSelf: 'center'  // Centraliza na tela
                            }}
                            resizeMode="contain"     // Garante que NADA seja cortado (nem o topo, nem o rodapé)
                        />
                    </View>

                    <View style={styles.testeView2}>
                        <Text style={styles.text}> Se delicie com nossos incríveis sabores de Pizza!</Text>
                    </View>

                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container2: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerPizza: {
        width: 700,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center'
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
    },


    testeView: {
        backgroundColor: '#1b1b19',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    testeView2: {
        backgroundColor: '#F57C00',
        width: '100%',
        height: 40,
        textAlign: 'center',
        justifyContent: 'center'
    },

    botao: {
        backgroundColor: '#F57C00', // Cor de fundo azul
        paddingVertical: 12,       // Espaçamento interno vertical
        paddingHorizontal: 24,     // Espaçamento interno horizontal
        borderRadius: 8,           // Cantos arredondados
        elevation: 3,              // Sombra leve para Android
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
});
