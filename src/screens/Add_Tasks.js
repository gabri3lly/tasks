import React, {Component} from "react";
import { 
    Text, 
    TextInput, 
    View,
    StyleSheet,
    TouchableOpacity,
    TouchablewithoutFeedback,
    Modal //componente de tela "incompleto", ajustavel e é possivel sobrepor ele
} from "react-native";

export default class AddTask extends Component{
    render(){
        return(
            <Modal
                transparent = {true}
                visible = {true}
                animationType = "slide"
            >
                <TouchablewithoutFeedback>
                    <View style={styles.fundo}></View>
                </TouchablewithoutFeedback>
                <View style={styles.principal}>
                    <Text style={styles.cabecalho}>Nova Tarefa</Text>
                    <TextInput
                        placeholder="Descrição da Tarefa"
                        style={styles.input}
                    />
                    <View>
                        <TouchableOpacity>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchablewithoutFeedback>
                    <View style={styles.fundo}></View>
                </TouchablewithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7'
    },
    principal:{
        flex: 1,
        backgroundColor: '#FFF'
    },
    cabecalho:{
        backgroundColor: "#B13B44",
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        padding: 15
    }
})