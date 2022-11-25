import React from "react";
import {View, Text, TextInput, Button} from 'react-native';
import {styles} from "./styles"

const StartGame = ()=>{
    return(
        <View style = {styles.container}>
            <Text style={styles.title}>Start Game</Text>
            <View style={styles.inputContainer}>
                <Text>Ingrese un numero</Text>
                <TextInput style={styles.input} placeholder="0" />
                <View style={styles.buttonContainer}>
                    <Button title ="Limpiar" onPress={() => {}} color="#b7999c"/>
                    <Button title ="Confirmar" onPress={() => {}} color="#b7999c"/>
                </View>
            </View>
        </View>
    )
}
export default StartGame;