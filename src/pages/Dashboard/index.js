import { View, Text } from "react-native";
import styles from './styles.js';
import { Link } from '@react-navigation/native';

export default function Dashboard(){
    return(
        <View style={styles.bg}>
            <View style={styles.bloco}>
                <Link to={{screen:"Cards"}} style={styles.tittle}>
                    TROCA DE ITENS
                </Link>
                <Text style={styles.txt}>
                    Aqui você poderá encontrar os itens que estão disponíveis para troca no mercado. Todos os itens são providos do inventário de outros jogadores, que recebem 90% do preço do item vendido. Os outros 10% são impostos.
                </Text>
            </View>

            <View style={styles.bloco}>
                <Text style={styles.tittle}>
                    MELHORES JOGADORES
                </Text>
                <Text style={styles.txt}>
                    Aqui você poderá acompanhar o ranking mensal dos melhores jogadores do For Honor RPG. A classificação reinicia todo dia 10 às 14:00 no horário de Brasília.
                </Text>
            </View>
        </View>
    )
}