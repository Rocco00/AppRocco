import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { db } from "../config";
class BarbiereRiepilogo extends React.Component {
    constructor(props){
        super(props)
        estrarre_giorno = this.props.navigation.getParam("estrarre_giorno")
        estrarre_tutte_le_prenotazioni = this.props.navigation.getParam("tutte_le_prenotazioni")
        this.state = {estrarre_giorno:estrarre_giorno,estrarre_tutte_le_prenotazioni:estrarre_tutte_le_prenotazioni}
    }
    render () {
        var prenotazioneGiornaliera = Object.keys(this.state.estrarre_tutte_le_prenotazioni).filter((key)=>{
            var numeroPrenotazione = this.state.estrarre_tutte_le_prenotazioni[key]
            if (numeroPrenotazione.anno == this.state.estrarre_giorno.year
                &&
                numeroPrenotazione.mese == this.state.estrarre_giorno.month
                &&
                numeroPrenotazione.giorno == this.state.estrarre_giorno.day){
                    return true 
                }
            
        })
        console.log(prenotazioneGiornaliera)
        return (
            <View style = {styles.centrale}>
                <View>
                    <Text style = {styles.rettangolo}>
                        PRENOTAZIONI
                    </Text>
                </View>
                <View>
                        {prenotazioneGiornaliera.map((key)=>{
                            var numeroPrenotazione = this.state.estrarre_tutte_le_prenotazioni[key]
                            
                            
                            return(
                            <View key={key}>

                                <View style = {styles.spazio}>
                                    <Text style = {styles.testoGenerale}>
                                        NOME -> {numeroPrenotazione.cliente.nome}
                                    </Text>
                                </View>
                                
                                <View style = {styles.spazio}>
                                <Text style = {styles.testoGenerale}>
                                    GIORNO -> {numeroPrenotazione.giorno}
                                </Text>
                                </View>
                                
                                <View style = {styles.spazio}>
                                <Text style = {styles.testoGenerale}>
                                    ORARIO -> {numeroPrenotazione.orario}
                                </Text>
                                </View>
                                {/* Ho messo come commenti perchè a me non piace l'idea che 
                                il barbiere può cancellare le prenotazioni dei clienti ma se in futuro
                                qualche barbiere la chiede questa funzione è la seguente ->
                                <View style = {styles.centrale}>
                                <TouchableOpacity onPress={()=>{
                                    db.ref("prenotazione/"+key).remove()
                                }}>
                                <Text style = {styles.ovale1}>
                                        CANCELLARE
                                    </Text>
                                </TouchableOpacity>
                                </View> */}
                            </View>
                            )
                        })}
                    </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
centrale: {
    justifyContent:"center",
    alignItems:"center",
},
rettangolo: {
    borderWidth:1,
    borderColor:"#ff0000",
    fontSize:25,
    textAlign:"center",
    marginTop:10,
    marginBottom:10,
    padding:10,
},
rettangolo1: {
    borderWidth:1,
    borderColor:"#00008b",
    fontSize:25,
    textAlign:"center",
    marginTop:10,
    marginBottom:10,
    padding:10,
},
})
export default BarbiereRiepilogo

