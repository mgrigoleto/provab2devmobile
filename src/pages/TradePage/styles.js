import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bloco:{
        maxWidth:'100%',
        flexDirection:'row',
        padding:10,
        backgroundColor:'orange',
        marginTop:5,
        marginBottom:30,
        marginLeft:25,
        marginRight:30,
        borderRadius:10,
    },
    esquerda:{
        width:'30%',
        paddingRight:10
    },
    direita:{
        width:'70%',
        height:'100%',
    },
    img:{
        width:'100%',
        height:'100%',
        borderColor:'black',
        borderWidth:'2px',
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:'5px',
        fontSize:'17px'
    },
    desc:{
        marginBottom:'3px',
        fontStyle:'italic',
    },
    power:{
        marginBottom:'3px',
    },
    type:{
        marginBottom:'3px',
    },
    raridade:{
        marginBottom:'3px',
    },
    btn:{
        width:'100%'
    }
})

export default styles;