import { TextInput, View, Image, TouchableOpacity, Text } from "react-native";
import styles from './styles.js';

const imagePath = require('../../images/logo-for-honor.png')

export default function ForgetPasswordPage(){
    return(
        <View style={styles.bloco}>
            <View style={styles.imgView}>
                <Image style={styles.img} source={imagePath}/>
            </View>

            <View>
                <TextInput placeholder="E-mail" placeholderTextColor="white" style={styles.input}/>
                <TextInput placeholder="Confirmar E-mail" placeholderTextColor="white"  style={styles.input}/>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Enviar código</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}