import React from "react";
// 1. IMPORTADO O PLATFORM AQUI DENTRO DAS CHAVES
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from "react-native";
import ComponentStorage from "../../components/ComponentStorage";
import { useTheme } from "../../context/ThemeContext";

export default function Usuario({ navigation }) {
    const { theme, isDarkMode, toggleTheme } = useTheme();

    return (
        // 2. O ESTILO safeAreaContainer AGORA APLICA O RECUO AUTOMÁTICO SE FOR CELULAR
        <View style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>

            {/* CABEÇALHO HORIZONTAL */}
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

            {/* CONTEÚDO PRINCIPAL DA PÁGINA */}
            <ComponentStorage />

        </View>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        // 3. SE FOR NO WEB FICA ZERO, SE FOR NO CELULAR DA O ESPAÇO DE 40PX PARA NÃO SUMIR NAS NOTIFICAÇÕES
        paddingTop: Platform.OS === 'web' ? 0 : 40,
    },
    headerBotoes: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10,
        height: '100%',
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
    botaoTemaInline: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    }
});