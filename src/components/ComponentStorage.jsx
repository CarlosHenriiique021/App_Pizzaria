import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from '../context/ThemeContext';

export default function ComponentStorage() {
    const { theme, isDarkMode } = useTheme();

    const [nome, setNome] = useState('');
    const [pedido, setPedido] = useState('');
    const [telefone, setTelefone] = useState('');
    const [valor, setValor] = useState('');
    const [usuario, setUsuario] = useState([]);

    async function salvarUsuario() {
        if (!nome || !pedido) {
            alert("Por favor, preencha pelo menos o Nome e o Pedido!");
            return;
        }

        try {
            const novoUsuario = {
                id: Date.now().toString(), // Corrigido toString() que estava sem parênteses
                nome,
                pedido,
                telefone,
                valor
            };

            const dados = await AsyncStorage.getItem("usuario");
            let lista = [];

            if (dados != null) {
                lista = JSON.parse(dados);
            }

            lista.push(novoUsuario);
            await AsyncStorage.setItem("usuario", JSON.stringify(lista));

            setNome("");
            setPedido("");
            setTelefone("");
            setValor("");

            alert("Pedido salvo com sucesso!");
            carregarUsuarios(); // Atualiza a lista automaticamente ao salvar
        } catch (error) {
            console.log("Erro: " + error);
        }
    }

    async function carregarUsuarios() {
        try {
            const dados = await AsyncStorage.getItem("usuario");
            if (dados != null) {
                setUsuario(JSON.parse(dados));
            } else {
                setUsuario([]);
            }
        } catch (error) {
            console.log("Erro: " + error);
        }
    }

    async function removerUsuario(id) {
        try {
            const novaLista = usuario.filter(item => item.id !== id);
            await AsyncStorage.setItem("usuario", JSON.stringify(novaLista));
            setUsuario(novaLista);
        } catch (error) {
            console.log("Erro: " + error);
        }
    }

    async function limparStorage() {
        try {
            await AsyncStorage.clear();
            setUsuario([]);
            alert("Todos os dados foram apagados!");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={[styles.cardForm, { backgroundColor: isDarkMode ? '#1a1a1a' : '#f9f9f9' }]}>
                <Text style={[styles.titulo, { color: theme.text }]}>Cadastro de Pedidos</Text>

                <TextInput
                    placeholder="Nome do Cliente"
                    placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
                    style={[styles.input, { color: theme.text, borderColor: isDarkMode ? '#444' : '#ccc', backgroundColor: isDarkMode ? '#2d2d2d' : '#fff' }]}
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    placeholder="Pedido (Ex: Pizza Calabresa)"
                    placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
                    style={[styles.input, { color: theme.text, borderColor: isDarkMode ? '#444' : '#ccc', backgroundColor: isDarkMode ? '#2d2d2d' : '#fff' }]}
                    value={pedido}
                    onChangeText={setPedido}
                />

                <TextInput
                    placeholder="Telefone"
                    placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
                    style={[styles.input, { color: theme.text, borderColor: isDarkMode ? '#444' : '#ccc', backgroundColor: isDarkMode ? '#2d2d2d' : '#fff' }]}
                    value={telefone}
                    keyboardType="phone-pad"
                    onChangeText={setTelefone}
                />

                <TextInput
                    placeholder="Valor (R$)"
                    placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
                    style={[styles.input, { color: theme.text, borderColor: isDarkMode ? '#444' : '#ccc', backgroundColor: isDarkMode ? '#2d2d2d' : '#fff' }]}
                    value={valor}
                    keyboardType="numeric"
                    onChangeText={setValor}
                />

                {/* Botões de Ação */}
                <TouchableOpacity style={styles.btnSalvar} onPress={salvarUsuario}>
                    <Text style={styles.btnTextoBranco}>Salvar Pedido</Text>
                </TouchableOpacity>

                <View style={styles.rowBotoes}>
                    <TouchableOpacity style={styles.btnSecundario} onPress={carregarUsuarios}>
                        <Text style={styles.btnTextoBranco}>Atualizar Lista</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnLimpar} onPress={limparStorage}>
                        <Text style={styles.btnTextoBranco}>Limpar Banco</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Lista de Usuários/Pedidos Cadastrados */}
            {usuario.length > 0 && (
                <Text style={[styles.subtitulo, { color: theme.text }]}>Pedidos Ativos:</Text>
            )}

            {usuario.map((item) => (
                <View key={item.id} style={[styles.userCard, { backgroundColor: isDarkMode ? '#222' : '#fff', borderColor: isDarkMode ? '#333' : '#e0e0e0' }]}>
                    <View style={styles.userCardInfo}>
                        <Text style={[styles.userTextBold, { color: theme.text }]}>Cliente: <Text style={styles.userTextNormal}>{item.nome}</Text></Text>
                        <Text style={[styles.userTextBold, { color: theme.text }]}>Pedido: <Text style={styles.userTextNormal}>{item.pedido}</Text></Text>
                        <Text style={[styles.userTextBold, { color: theme.text }]}>Tel: <Text style={styles.userTextNormal}>{item.telefone || 'N/A'}</Text></Text>
                        <Text style={[styles.userTextBold, { color: theme.text }]}>Valor: <Text style={{ color: '#1EA7E1', fontWeight: 'bold' }}>R$ {item.valor || '0,00'}</Text></Text>
                    </View>

                    <TouchableOpacity style={styles.btnApagarCard} onPress={() => removerUsuario(item.id)}>
                        <Text style={styles.btnTextoBranco}>X</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 20,
        alignItems: 'center',
    },
    cardForm: {
        width: '100%',
        maxWidth: 450,
        padding: 20,
        borderRadius: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        width: '100%',
        maxWidth: 450,
        marginBottom: 10,
        marginTop: 10,
    },
    input: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    btnSalvar: {
        backgroundColor: '#16A34A', // Laranja temático
        width: '100%',
        height: 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    rowBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        gap: 10,
    },
    btnSecundario: {
        backgroundColor: '#1EA7E1', // Azul temático das faixas
        flex: 1,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLimpar: {
        backgroundColor: '#777',
        flex: 1,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTextoBranco: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    userCard: {
        width: '100%',
        maxWidth: 450,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        elevation: 2,
    },
    userCardInfo: {
        flex: 1,
        gap: 4,
    },
    userTextBold: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    userTextNormal: {
        fontWeight: 'normal',
    },
    btnApagarCard: {
        backgroundColor: '#ff3b30', // Vermelho padrão para deletar
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    }
});