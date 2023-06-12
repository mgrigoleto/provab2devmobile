import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bloco:{
        width:'100%',
        height:'100%',
        backgroundColor:'black',
        flexDirection:'column',
        padding:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    imgView:{
        padding:10,
        width:'80%',
        height:100,
    },
    img:{
        width:'100%',
        height:'100%',
    },
    input:{
        height:50,
        width:220,
        borderColor:'orange',
        borderWidth:2,
        borderRadius:10,
        margin:7,
        padding:10,
    },
    btn:{
        height:50,
        width:220,
        borderRadius:10,
        margin:7,
        padding:10,
        backgroundColor:'orange',
        color:'black',
        textAlign:'center',
        justifyContent:'center',
    },
    btnTxt:{
        fontSize:24,
        fontWeight:'bold',
    },
    links:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',  
    },
    txt:{
        margin:4,
        fontSize:16,
        fontWeight:'bold',
        color:'white',     
    }

})

export default styles;