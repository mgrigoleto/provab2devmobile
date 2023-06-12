import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bg:{
        backgroundColor:'black',
        width:'100%',
        height:'100%',
        marginLeft:-5,
        padding:0,
    },
    bloco:{
        maxWidth:'100%',
        minHeight:200,
        borderRadius:10,
        backgroundColor:'orange',
        flexDirection:'column',
        padding:20,
        marginTop:30,
        marginLeft:30,
        marginRight:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    tittle:{
        margin:4,
        fontSize:22,
        fontWeight:'bold',
        color:'black',
    },
    txt:{
        textAlign:'justify',
        margin:4,
        fontSize:16,
        color:'black',     
    }

})

export default styles;