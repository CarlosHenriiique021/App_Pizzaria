import React from 'react';
// Importado o 'Platform' para gerenciar o espaçamento dos celulares
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function Home({ navigation }) {
    const { theme, isDarkMode, toggleTheme } = useTheme();

    return (
        // View externa adicionada apenas para aplicar o recuo das notificações do celular
        <View style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>

            {/* 1. CONTÊINER DO CABEÇALHO HORIZONTAL (Isolado em 70px de altura para não quebrar a tela) */}
            <View style={{ width: '100%', height: 70, backgroundColor: isDarkMode ? '#1a1a1a' : '#f0f0f0' }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.headerBotoes}
                >
                    <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.btnText}>Home</Text>
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

                    <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.navigate('Usuario')}>
                        <Text style={styles.btnText}>Usuário</Text>
                    </TouchableOpacity>

                    {/* BOTÃO DO TEMA INLINE REDONDO */}
                    <TouchableOpacity
                        onPress={toggleTheme}
                        style={[styles.botaoTemaInline, { backgroundColor: theme.buttonBg }]}
                    >
                        <Text style={{ fontSize: 18 }}>
                            {isDarkMode ? "☀️" : "🌙"}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {/* 2. ROLAGEM PRINCIPAL DA TELA (Rola tudo para baixo normalmente) */}
            <ScrollView contentContainerStyle={[styles.scrollContainer, { backgroundColor: theme.background }]}>

                {/* Faixa promocional */}
                <View style={styles.faixaTopo}>
                    <Text style={styles.textoFaixa}>Bateu a fome? Escolha e aproveite!</Text>
                </View>

                {/* Container da Imagem Dinâmica */}
                <View style={{ width: '100%', alignItems: 'center', marginVertical: 15 }}>
                    <Image
                        source={
                            isDarkMode
                                ? require('../../../assets/Pizzaria/Dark/Pedido.png')
                                : require('../../../assets/Pizzaria/Light/Pedido.png')
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

                {/* Faixa inferior */}
                <View style={styles.textoSimples}>
                    <Text style={styles.textoFaixa}>Sua pizza favorita a um clique.</Text>
                </View>

            </ScrollView>
        </View >
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
        alignItems: 'center',
        paddingHorizontal: 20, // Dá o espaço inicial e final para a rolagem ficar bonita
        gap: 10,
        height: '100%', // Força o carrossel a alinhar tudo usando os 70px da View pai
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
    // Botão redondo do tema
    botaoTemaInline: {
        width: 44,
        height: 44,
        borderRadius: 22, // Círculo perfeito
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    }
});