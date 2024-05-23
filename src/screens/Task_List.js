import React, {Component} from "react"
import { StyleSheet, View, Text } from "react-native"

export default class Task_List extends Component {
    render(){
        return(
            <View styele ={styles.container}>
                <Text>Lista de Tarefas</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})