import React from "react";
import {View,} from "react-native";
import {Calendar} from "react-native-calendars";
import {LocaleConfig} from 'react-native-calendars';
class ClientePrenotazioni extends React.Component {
    render (){
        return (
            <View>
                <Calendar
                    current = {new Date()}
                    monthFormat = {"yyyy MMMM"}
                    hideExtraDays = { true }
                    hideArrows = { false }
                    firstDay = { 1 }
                    onDayPress ={(giornoSelezionato)=>{
                        this.props.navigation.navigate("ClienteOrario",{
                            giornoSelezionato
                        })
                    }}
                    
                />
            </View>
    )
        }
    }
export default ClientePrenotazioni