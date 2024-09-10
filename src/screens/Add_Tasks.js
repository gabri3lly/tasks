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
                <View>
                    <Text>Descrição da Tarefa</Text>
                    <TextInput></TextInput>
                    <View>
                        <TouchableOpacity>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7'
    }
})