import { TextInput, View, Image, TouchableOpacity, Text } from "react-native";
import styles from './styles.js';
import { Link } from '@react-navigation/native';

const imagePath = require('../../images/logo-for-honor.png')

export default function RegisterPage(){
    return(
        <View style={styles.bloco}>
            <View style={styles.imgView}>
                <Image style={styles.img} source={imagePath}/>
            </View>

            <View>
                <TextInput placeholder="E-mail" placeholderTextColor="white" style={styles.input}/>
                <TextInput placeholder="Senha" placeholderTextColor="white"  style={styles.input}/>
                <TextInput placeholder="Confirmar Senha" placeholderTextColor="white"  style={styles.input}/>
                <TouchableOpacity style={styles.btn}>
                    <Link to={{screen: "Dashboard"}} style={styles.btnTxt}>Registrar</Link>
                </TouchableOpacity>
            </View>
        </View>
    )
}