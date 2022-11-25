import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        padding: 25,
        justifyContent:"center",
        alignItems: "center",
        marginVertical: 20,
        backgroundColor: "#eb5160",
    },
    title:{
        fontSize: 18,
        marginVertical:10,
        color: "#dfe0e2",
    },
    inputContainer:{
        maxWidth: '80%',
        justifyContent: "center",
        alignItems: "center",

    },
    input:{
        width:"100%",
        borderBottomColor: "#b7999c",
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: "center",
    },
    buttonContainer:{
        flexDirection:"row",
        width:"80%",
        justifyContent:"space-between",
        paddingHorizontal: 15,
        marginTop: 25,
    }
});