import React from "react";
import {View,} from "react-native";
import {Calendar} from "react-native-calendars";
import { db } from "../config";
class BarbierePrenotazioni extends React.Component {
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
    render (){
        var prenotazioneSelezionata = {}
        var questo = this
        Object.keys(this.state.prenotazione).map(function(key){
            var unicaPrenotazione = questo.state.prenotazione[key]
            var valoreMese = unicaPrenotazione.mese
            if (unicaPrenotazione.mese<=9){
                valoreMese = "0"+unicaPrenotazione.mese
            }
            var nuovaPrenotazioneSelezionata = unicaPrenotazione.anno + "-" + valoreMese + "-" + unicaPrenotazione.giorno
            prenotazioneSelezionata[nuovaPrenotazioneSelezionata]={marked: true}
        })
        console.log(prenotazioneSelezionata)
        return (
            <View>
                <Calendar
                    current = {new Date()}
                    monthFormat = {"yyyy MMMM"}
                    hideExtraDays = { true }
                    hideArrows = { false }
                    firstDay = { 1 }
                    markedDates={prenotazioneSelezionata}
                    onDayPress ={(giornoSelezionato)=>{
                        this.props.navigation.navigate("BarbiereRiepilogo",{
                            estrarre_giorno:giornoSelezionato,
                            tutte_le_prenotazioni:this.state.prenotazione,
                        })
                    }}
                />
            </View>
    )
        }
    }
export default BarbierePrenotazioni
