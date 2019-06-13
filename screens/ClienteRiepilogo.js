import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { db } from "../config";
import { ScrollView } from "react-native-gesture-handler";
class ClienteRiepilogo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            prenotazione:{
                
            }
        }
    }
    componentDidMount(){
        var questo = this
        db.ref("prenotazione").on("value",function(snapshot){
            var prenotazione = snapshot.val()
            questo.setState({prenotazione:prenotazione})
        })
    }
        
    render(){
        var mesi = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre",]
        console.log(this.state.prenotazione)
        return(
        <ScrollView>

                <Text style = {styles.testoNegozio1}>
                    LE MIE PRENOTAZIONI
                </Text>
                <View style = {styles.rettangolo}>
                    <View>
                    <Text style = {styles.testoNegozio}>
                        BARBER SHOP
                    </Text>
                    </View>
                    <View>
                        {Object.keys(this.state.prenotazione).map((key)=>{
                            var numeroPrenotazione = this.state.prenotazione[key]
                            console.log(numeroPrenotazione)
                            
                            return(
                            <View key={key}>

                                <View style = {styles.spazio}>
                                <Text style = {styles.testoGenerale}>
                                    MESE -> {mesi[numeroPrenotazione.mese-1]}
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
                                <View style = {styles.centrale}>
                                <TouchableOpacity onPress={()=>{
                                    db.ref("prenotazione/"+key).remove()
                                }}>
                                <Text style = {styles.ovale1}>
                                        CANCELLARE
                                    </Text>
                                </TouchableOpacity>
                                </View>
                                </View>
                            )
                        })}
                    </View>

                </View>
            </ScrollView>
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
            color:"#ff0000",
        },
        testoNegozio1:{
            fontSize:30,
            textAlign:"center",
            color:"#ff0000",
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
export default ClienteRiepilogo