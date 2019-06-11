import React from "react";
import {View,StyleSheet,Text,TouchableOpacity} from "react-native";
import {firebase,db } from "../config";
class ClienteConfermiLaPrenotazione extends React.Component {
    constructor(props){
        super(props)
        estrarre_giorno = this.props.navigation.getParam("estrarre_giorno")
        estrarre_ora = this.props.navigation.getParam("ora")
        this.state = {estrarre_giorno:estrarre_giorno,estrarre_ora:estrarre_ora}
    }
    render(){
        var mesi = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre",]

        
        return(
            <View>
                <Text style = {styles.testoNegozio}>
                    CONFERMA LA PRENOTAZIONE
                </Text>
                <View style = {styles.rettangolo}>
                    <View>
                    <Text style = {styles.testoNegozio}>
                        BARBER SHOP CIAO
                    </Text>
                    </View>
                    
                    <View style = {styles.spazio}>
                    <Text style = {styles.testoGenerale}>
                        MESE -> {mesi[this.state.estrarre_giorno.month-1]}
                    </Text>
                    </View>
                    
                    <View style = {styles.spazio}>
                    <Text style = {styles.testoGenerale}>
                        GIORNO -> {this.state.estrarre_giorno.day}
                    </Text>
                    </View>
                    
                    <View style = {styles.spazio}>
                    <Text style = {styles.testoGenerale}>
                        ORARIO -> {this.state.estrarre_ora}
                    </Text>
                    </View>
                </View>
                <View style = {styles.centrale}>
                <TouchableOpacity onPress={()=>{
                    var annoSalvato = this.state.estrarre_giorno.year
                    var meseSalvato = this.state.estrarre_giorno.month
                    var giornoSalvato = this.state.estrarre_giorno.day
                    var orarioSalvato = this.state.estrarre_ora
                    prenotazione = {
                        anno:annoSalvato,
                        mese:meseSalvato,
                        giorno:giornoSalvato,
                        orario:orarioSalvato,
                        cliente:global.utenteuid,
                        shop:global.utente.shop
                    }
                    console.log(prenotazione)
                    db.ref("prenotazione").push(prenotazione)
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