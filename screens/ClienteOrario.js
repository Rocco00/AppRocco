import React from "react";
import {View,Image,StyleSheet,Text,TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
class ClienteOrario extends React.Component {
    constructor(props){
        super(props)
        estrarre_giorno = this.props.navigation.getParam("giornoSelezionato")
        console.log(estrarre_giorno)
        var orario = ["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","16:00","16:30",,"17:00","17:30","18:00","18:30","19:00","19:30"]
        this.state={estrarre_giorno:estrarre_giorno,orario}
    }
    render(){
        var navigation=this.props.navigation
        var selectday=this.state.estrarre_giorno
        return(
            <ScrollView>
                <View>
                <Text style = {styles.testo}>
                    A CHE ORA ?
                </Text>
                </View>
                <View style = {styles.sinistra_e_destra}>
                    {
                        this.state.orario.map(function(ora){
                            console.log(ora)
                            return(
                                <TouchableOpacity key = {ora} onPress={()=>{
                                    navigation.navigate("ClienteConfermiLaPrenotazione",{
                                        ora:ora,estrarre_giorno:selectday
                                    })
                                }
                            }>
                                    <View style = {styles.collonna}>
                                    <Image source = {require("../orologio.png")}/>
                                    <Text>
                                        ALLE ORE {ora}
                                    </Text>
                                    <Image source = {require("../vero.png")}/>
                                    </View>
                                    </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    testo:{
            fontSize:25,
            textAlign:"center",
        },
    sinistra_e_destra:{
            justifyContent:"space-between",
            width:"100%",
            marginBottom:50,
    },
    collonna:{
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        marginTop:30,
    },
})
export default ClienteOrario
