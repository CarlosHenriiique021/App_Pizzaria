import {  StyleSheet, Text, View, Image, FlatList, FlatListComponent } from 'react-native';

export default function ComponentProduct(props) {

    return (
        <View style={styles.container}>

            <View style={styles.containerProduct}>

                <View style={styles.imageProduct}>
                    <Image
                        source={{ uri: props.image }}
                        style={{ width: 80, height: 80 }}
                        resizeMode='contain'

                    />
                </View>
                <View style={styles.textContainer}>
                    <text style={styles.texto1}>{props.textoPrincipal}</text>
                    <text style={styles.texto2}>{props.textoSecundario}</text>
                    <View style={styles.texto3}> 
                        <Text>clique</Text>
                    </View>
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
        flexDirection: "row"
    },

    imageProduct: {
        backgroundColor: "yellow",
        height: 85,
        width: 100,
        marginLeft: 10,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textContainer: {
        marginLeft: 10,
        width: 270

    },

    texto1: {
        fontSize: 21
    },

    texto2: {
        fontSize: 18,
        color: "#017ff5"
    },

        texto3: {
        alignItems: "flex-end"
    },

});
