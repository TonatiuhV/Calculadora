import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex:1,
        backgroundColor: 'black',
        
    },
    caculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    boton: {
       
        height: 80,
        borderRadius:100,
        backgroundColor: '#2D2D2D',
        justifyContent: 'center',
        marginHorizontal:8, // En necesario comentarlo si quieres que funcione el flex
    },
    botonText: {        
        color:'white',
        textAlign: 'center',
        padding: 10,
        fontSize:30,
        fontWeight:'300'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom:10,
    }
})