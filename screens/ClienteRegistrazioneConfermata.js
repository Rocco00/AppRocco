import React from "react";
import {Text,View,Image,TouchableOpacity,StyleSheet} from "react-native";
class ClienteRegitrazioneConfermata extends React.Component {
    render() {
        return(
            <View style = {styles.centrale}>
                <View style = {styles.spazio}>
                <Image source = {require ("../conferma.png")} style = {styles.immagine} />
                </View>
                    <View style = {styles.spazio1}>
                        <Text style = {styles.testo1}>
                        REGISTRAZIONE AVVENUTA CON SUCCESSO
                        </Text>
                    </View>
                
                <View style = {styles.spazio}>
                    <Image source = {require ("../barber.png")} style = {styles.immagine} />
                </View>
                <View style = {styles.spazio1}>
                    <Text style = {styles.testo}>
                        BENVENUTO
                    </Text>
                </View>
                <View>
                    <Text style = {styles.testo}>
                    SEI PRONTO A UTILIZZARE APP ?
                    CLICCA SUL MIO PROFILO PER EFFETTUARE IL LOGIN !!
                    </Text>
                </View>
                <View style = {styles.spazio1}>
                    <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("ClienteMenu")
                }
            }>
                    <Text style = {styles.ovale1}>
                        MIO PROFILO
                    </Text>
                    </TouchableOpacity>
                </View>
             </View>
        )}
}
const styles = StyleSheet.create({
    immagine:{
        height:120,
        width:120,
    },
    centrale:{
        alignItems:"center",
        flex:1,
    },
    spazio:{
        marginTop:100,
    },
    testo:{
        fontSize:20,
        textAlign:"center",
    },
    spazio1:{
        marginTop:20,
    },
    testo1:{
        fontSize:18,
        textAlign:"center",
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
    },
})
export default ClienteRegitrazioneConfermata