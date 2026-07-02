import { StyleSheet, Text, View, Image, FlatList, FlatListComponent, TouchableOpacity } from 'react-native';

export default function ComponentProductFlat() {

    const products = [
        { image: "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-black-dslr-camera-with-large-lens-clipart-illustration-stock-photo-png-image_13758787.png", textoPrincipal: "Câmera Mirrorless Sony Alpha", textoSecundario: "R$9.800,00" },
        { image: "https://png.pngtree.com/png-clipart/20250104/original/pngtree-trendy-smartwatch-with-notifications-and-apps-png-image_18812139.png", textoPrincipal: "Câmera Mirrorless Sony Alpha", textoSecundario: "R$9.800,00" },
        { image: "https://png.pngtree.com/png-clipart/20241210/original/pngtree-nike-shoes-transparent-png-image_17778783.png", textoPrincipal: "Câmera Mirrorless Sony Alpha", textoSecundario: "R$9.800,00" },
        { image: "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-traveling-suitcase-luggage-png-image_9687747.png", textoPrincipal: "Câmera Mirrorless Sony Alpha", textoSecundario: "R$9.800,00" },
        { image: "https://png.pngtree.com/png-clipart/20241114/original/pngtree-blue-wireless-gaming-headset-png-image_17009772.png", textoPrincipal: "Câmera Mirrorless Sony Alpha", textoSecundario: "R$9.800,00" },
        { image: "https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png", textoPrincipal: "Câmera Mirrorless Sony Alpha", textoSecundario: "R$9.800,00" }

    ]
    return (
        <View style={styles.container}>

            <FlatList
                data={products}
                renderItem={({ item }) => <ProdutosLista data={item} />}
            />

        </View>
    );
}

function ProdutosLista({ data }) {
    return (
        <View style={styles.containerProduct}>

            <View style={styles.imageProduct}>
                <Image
                    source={{ uri: data.image }}
                    style={{ width: 80, height: 80 }}
                    resizeMode='contain'

                />
            </View>
            <View style={styles.textContainer}>
                <text style={styles.texto1}>{data.textoPrincipal}</text>

                <View style={styles.carrinhoContainer}>
                <text style={styles.texto2}>{data.textoSecundario}</text>
    
                <TouchableOpacity>
                        <Text style={styles.texto3}>➕🛒 </Text>
                </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',

    },

    containerProduct: {
        backgroundColor: "white",
        width: 400,
        height: 100,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: "row",
        margin: 10
    },

    imageProduct: {
        height: 85,
        width: 100,
        marginLeft: 10,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textContainer: {
        marginLeft: 10,
        width: 270,
        height: 80,
    },

    carrinhoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 130
    },

    texto1: {
        fontSize: 22
    },

    texto2: {
        fontSize: 20,
        color: "#017ff5"
    },
    texto3: {
        fontSize: 15,
    },

});
