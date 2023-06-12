import { Button, Image, Text, View } from "react-native";
import styles from './styles';

export default function Item(sinistro){
    return(
        <View style={styles.bloco}>
            <View style={styles.esquerda}>
                <Image style={styles.img} source={{uri: sinistro.item.imgLink}}/>
            </View>
            <View style={styles.direita}>
                <Text style={styles.title}>{sinistro.item.title} </Text>
                <Text style={styles.desc}>Decrição: {sinistro.item.desc}</Text>
                <Text style={styles.power}>Poder: {sinistro.item.power}</Text>
                <Text style={styles.type}>Tipo: {sinistro.item.type}</Text>
                <Text style={styles.raridade}>Raridade: {sinistro.item.raridade}</Text>
                <Button style={styles.btn} color="black" title="trocar"/>
            </View>
        </View>
    )
}