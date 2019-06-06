import React from "react";
import {View,StyleSheet,Text,TouchableOpacity} from "react-native";
class ClienteConfermiLaPrenotazione extends React.Component {
    render(){
        return(
            <View>
                <Text style = {styles.testoNegozio}>
                    CONFERMA LA PRENOTAZIONE
                </Text>
                <View style = {styles.rettangolo}>
                    <View>
                    <Text style = {styles.testoNegozio}>
                        BARBER SHOP
                    </Text>
                    </View>
                    
                    <View style = {styles.spazio}>
                    <Text style = {styles.testoGenerale}>
                        MESE ->
                    </Text>
                    </View>
                    
                    <View style = {styles.spazio}>
                    <Text style = {styles.testoGenerale}>
                        GIORNO ->
                    </Text>
                    </View>
                    
                    <View style = {styles.spazio}>
                    <Text style = {styles.testoGenerale}>
                        ORARIO ->
                    </Text>
                    </View>
                </View>
                <View style = {styles.centrale}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("ClientePrenotazioneConfermata")
                }
            }>
                <Text style = {styles.ovale1}>
                        CONFERMA 
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    rettangolo:{
        borderWidth:1,        
        fontSize:40,
        textAlign:"center",
        marginTop:30,
        marginBottom:30,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    },
    ovale1:{
            width:230,
            height:40,
            borderRadius:25,
            borderWidth:1,
            borderColor:"#808080",
            fontSize:25,
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center",
            paddingLeft:10,
            paddingRight:10,
        },
        testoNegozio:{
            fontSize:30,
            textAlign:"center",
        },
        testoGenerale:{
            fontSize:15,
            textAlign:"center",
        },
        spazio:{
            marginBottom:15,
            marginTop:5,
        },
        centrale: {
            justifyContent:"center",
            alignItems:"center",
        },

})
export default ClienteConfermiLaPrenotazione