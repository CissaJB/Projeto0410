import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner: {
        alignContent:'center',
        justifyContent: 'flex-start',
        marginBottom: 3,
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        backgroundColor: '#785BFF'
    },
    viewImg: {
        width: '35%',
        height: 150,
        backgroundColor: '#FFC745',
        padding: 10
    },
    viewData: {
        backgroundColor: '#007A78',
        padding: 10,
        width: '70%',
        height: '100%'
    },
    item: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5
    },
    descricao: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    },

    img: {
        width: '100%',
        height: '100%'
    },
});


export default styles;