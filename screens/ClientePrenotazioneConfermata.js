import React from "react";
import {Text,View,Image,TouchableOpacity,StyleSheet} from "react-native";
class ClientePrenotazioneConfermata extends React.Component {
    render() {
        return(
        <View style = {styles.spazio}>
            <View style = {styles.centrale}>
                <Image source = {require ("../conferma.png")} style = {styles.immagine} />
                <View>
                    <Text style = {styles.testo}>
                    PRENOTAZIONE AVVENUTA CON SUCCESSO
                    </Text>
                </View>
            </View>
            <View style = {styles.indietro_e_avanti}>
                    <View style = {styles.sinistra}>
                    <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("ClienteMenu")
                }
            }>
                        <Image source = {require("../Sinistra.png")} style = {[styles.immagine2,styles.sinistra2]}/>
                        <Text style = {styles.testoIcone}>
                        PER TORNARE AL MENU' PRINCIPALE 
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("ClienteRiepilogo")
                }
            } style = {styles.destra}>
                        <Image source = {require("../Destra.png")} style = {styles.immagine2}/>
                        <Text style = {styles.testoIcone}>
                        PER VEDERE LE TUE PRENOTAZIONI 
                        </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    immagine:{
        height:160,
        width:160,
    },
    spazio: {
        justifyContent:"space-between",
        alignItems:"center",
        flex:1,
    },
    testo:{
        fontSize:25,
        textAlign:"center",
    },
    indietro_e_avanti:{
        justifyContent:"space-between",
        flexDirection:"row",
        width:"100%",
        marginBottom:50,
    },
    immagine2:{
        height:50,
        width:50,
    },
    sinistra:{
        width:110,
        paddingLeft:30,
    },
    centrale:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
    },
    destra:{
        width:110,
        alignItems:"flex-end",
        paddingRight:30,
    },
    testoIcone:{
        fontSize:10,
    },
})
export default ClientePrenotazioneConfermata