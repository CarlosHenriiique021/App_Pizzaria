import React from 'react';
// Importado o 'Platform' para gerenciar o espaçamento dos celulares
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function Home({ navigation }) {
    const { theme, isDarkMode, toggleTheme } = useTheme();

    return (
        // View externa adicionada apenas para aplicar o recuo das notificações do celular
        <View style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>

            <ScrollView contentContainerStyle={[styles.scrollContainer, { backgroundColor: theme.background }]}>

                {/* CABEÇALHO DE BOTÕES */}
                <View style={[styles.headerBotoes, { backgroundColor: isDarkMode ? '#1a1a1a' : '#f0f0f0' }]}>

                    <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.btnText}>Lar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.navigate('Sobre')}>
                        <Text style={styles.btnText}>Sobre</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.navigate('Pedido')}>
                        <Text style={styles.btnText}>Pedido</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.navigate('Contato')}>
                        <Text style={styles.btnText}>Contato</Text>
                    </TouchableOpacity>

                    {/* BOTÃO DO TEMA INLINE CORRIGIDO PARA FICAR REDONDO */}
                    <TouchableOpacity
                        onPress={toggleTheme}
                        style={[styles.botaoTemaInline, { backgroundColor: theme.buttonBg }]}
                    >
                        <Text style={{ fontSize: 18 }}>
                            {isDarkMode ? "☀️" : "🌙"}
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* Faixa promocional */}
                <View style={styles.faixaTopo}>
                    <Text style={styles.textoFaixa}>Bateu a fome? Escolha e aproveite!</Text>
                </View>

                {/* Container da Imagem Dinâmica */}
                <View style={{ width: '100%', alignItems: 'center', marginVertical: 15 }}>
                    <Image
                        source={
                            isDarkMode
                                ? require('../../../assets/Pizzaria/Dark/Home.png')
                                : require('../../../assets/Pizzaria/Light/Home.png')
                        }
                        style={{
                            width: '100%',
                            maxWidth: 420,
                            height: 580,
                            alignSelf: 'center',
                        }}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.textoSimples}>
                    <Text style={styles.textoFaixa}>Sua pizza favorita a um clique.</Text>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        // Aplica o espaçamento de 40px no topo apenas se for Android/iOS físico para liberar as notificações
        paddingTop: Platform.OS === 'web' ? 0 : 40,
    },
    scrollContainer: {
        alignItems: 'center',
        flexGrow: 1,
    },
    faixaTopo: {
        backgroundColor: '#1EA7E1',
        width: '100%',
        padding: 15,
        alignItems: 'center',
    },
    textoFaixa: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    containerPizza: {
        width: '100%',
        marginVertical: 10,
    },
    textoSimples: {
        backgroundColor: '#1EA7E1',
        width: '100%',
        padding: 15,
        alignItems: 'center',
    },
    // Botões
    headerBotoes: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center', // Alinha verticalmente os botões e o círculo do tema
        paddingVertical: 15,
        gap: 5,
    },
    btnMenu: {
        backgroundColor: '#1EA7E1',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    btnText: {
        color: '#000',
        fontWeight: 'bold',
    },
    // Estilo atualizado do botão do tema para ser perfeitamente redondo
    botaoTemaInline: {
        width: 44,
        height: 44,
        borderRadius: 22, // Metade exata de width/height garante o círculo perfeito
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    }
});