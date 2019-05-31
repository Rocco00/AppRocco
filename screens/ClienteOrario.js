import React from "react";
import {View,Image,StyleSheet,Text} from "react-native";
class ClienteOrario extends React.Component {
    render(){
        return(
            <View>
                <View>
                <Text style = {styles.testo}>
                    A CHE ORA ?
                </Text>
                </View>
                <View style = {styles.sinistra_e_destra}>
                    <View>
                    <Image source = {require("../orologio.png")}/>
                    <Text>
                        ALLE ORE 08:00 
                    </Text>
                    <Image source = {require("../vero.png")}/>
                    </View>

                    <View>
                    <Image source = {require("../orologio.png")}/>
                    <Text>
                        ALLE ORE 08:30 
                    </Text>
                    <Image source = {require("../vero.png")}/>
                    </View>

                    <View>
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
            flexDirection:"row",
            width:"100%",
            marginBottom:50,
    },
})
export default ClienteOrario
