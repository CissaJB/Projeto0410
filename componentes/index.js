import { Button, Image, Text, View } from "react-native";
import styles from "./styles";


export default function Cartas(props){
    return(
        <View style={styles.conteiner}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.carta.imgUrl
                }} style={styles.img} />
            </View>
            <View style={styles.viewData}>
                <Text style={styles.item}>{props.carta.item} </Text>
                <Text style={styles.descricao}>descrição:  {props.carta.descricao}</Text>
                <Button color={'#FFC745'} style={styles.btn} title="Trocar"/>
            </View>
        </View>
)
}


