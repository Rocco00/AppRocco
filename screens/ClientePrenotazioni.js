import React from "react";
import {View,} from "react-native";
import {Calendar,LocaleConfig} from "react-native-calendars";

LocaleConfig.locales["it"] = {
    monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],
    monthNamesShort: ["Genn","Febbr","Marzo","Apr","Magg","Giugno","Luglio","Agosto","Sett","Ott","Nov","Dic"],
    dayNames: ["Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato","Domenica"],
    dayNamesShort: ["Lun","Mart","Merc","Gio","Ven","Sab","Dom"],
    today: "Oggi",
};
LocaleConfig.defaultLocale = "it";
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