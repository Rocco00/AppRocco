import React from "react";
import {Text,View,Image,TouchableOpacity} from "react-native";
class ClientePrenotazioneConfermata extends React.Component {
    render() {
        return(
            <View style = {styles.centrale}>
                <Image source = {require ("../conferma.png")} style = {styles.immagine} />
                <View style = {styles.testo}>
                <Text>
                    PRENOTAZIONE AVVENUTA CON SUCCESSO
                </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    immagine:{
        height:160,
        width:130,
    },
    centrale: {
        justifyContent:"center",
        alignItems:"center",
    },
    testo:{
        fontSize:25,
        textAlign:"center",
    },
})
export default ClientePrenotazioneConfermata