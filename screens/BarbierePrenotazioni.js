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
        var oggetto = questo.state.prenotazione[key]
        var nuovaPrenotazioneSelezionata = oggetto.anno + "-" + oggetto.mese + "-" + oggetto.giorno
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
                    onDayPress ={(day)=>{
                        this.props.navigation.navigate("BarbiereRiepilogo")}}
                />
            </View>
    )
        }
    }
export default BarbierePrenotazioni
