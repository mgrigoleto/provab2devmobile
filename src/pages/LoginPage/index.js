import { TextInput, View, Image, TouchableOpacity, Text } from "react-native";
import styles from './styles.js';
import { Link } from '@react-navigation/native';

const imagePath = require('../../images/logo-for-honor.png');
export default function LoginPage(){
    return(
        <View style={styles.bloco}>
            <View style={styles.imgView}>
                <Image style={styles.img} source={imagePath}/>
            </View>

            <View>
                <TextInput placeholder="E-mail" placeholderTextColor="white" style={styles.input}/>
                <TextInput placeholder="Senha" placeholderTextColor="white" style={styles.input}/>
                <TouchableOpacity style={styles.btn}>
                    <Link to={{screen: "Dashboard"}} style={styles.btnTxt}>Entrar</Link>
                </TouchableOpacity>
                
            </View>
            

            <View style={styles.links}>
                <Link to={{screen: "RegisterPage"}} style={styles.txt}>Registrar-se</Link>
                <Link to={{screen: "ForgetPasswordPage"}} style={styles.txt}>Esqueci a senha</Link>
            </View>
        </View>
    )
}