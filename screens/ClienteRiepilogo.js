import React from "react";
import {View,Text,StyleSheet} from "react-native";
class ClienteRiepilogo extends React.Component {
    render () {
        return (
            <View style = {styles.centrale}>
                <View>
                <Text style = {styles.rettangolo}>
                    PRENOTAZIONI
                </Text>
                </View>
                    <View style = {styles.rettangolo1}>
                    <Text>
                        NOME ->
                    </Text>
                    <Text>
                        GIORNO ->
                    </Text>
                    <Text>
                        ORARIO ->
                    </Text>
                    <Text>
                        CANCELLARE ->
                    </Text>
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
export default ClienteRiepilogo