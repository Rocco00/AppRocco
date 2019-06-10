import React from "react";
import {View,Image,StyleSheet,Text,TouchableOpacity} from "react-native";
class ClienteOrario extends React.Component {
    constructor(props){
        super(props)
        this.props.navigation.getParam("giornoSelezionato")
        estrarre_giorno = this.props.navigation.getParam("giornoSelezionato")
        console.log(estrarre_giorno)
        this.setState({estrarre_giorno:estrarre_giorno})
        var orario = ["08:00",]
    }
    render(){
        return(
            <View>
                <View>
                <Text style = {styles.testo}>
                    A CHE ORA ?
                </Text>
                </View>
                <View style = {styles.sinistra_e_destra}>
                    <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("ClienteConfermiLaPrenotazione")
                }
            }>
                    <View style = {styles.collonna}>
                    <Image source = {require("../orologio.png")}/>
                    <Text>
                        ALLE ORE 08:00 
                    </Text>
                    <Image source = {require("../vero.png")}/>
                    </View>
                    </TouchableOpacity>

                    <View style = {styles.collonna}>
                    <Image source = {require("../orologio.png")}/>
                    <Text>
                        ALLE ORE 08:30 
                    </Text>
                    <Image source = {require("../vero.png")}/>
                    </View>

                    <View style = {styles.collonna}>
                    <Image source = {require("../orologio.png")}/>
                    <Text>
                        ALLE ORE 09:00 
                    </Text>
                    <Image source = {require("../vero.png")}/>
                    </View>
                </View>
            </View>
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
