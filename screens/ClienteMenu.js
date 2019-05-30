import React from "react";
import {View,Image,StyleSheet,Text,TouchableOpacity} from "react-native";
class ClienteMenu extends React.Component{
    render () {
        return(
            <View style = {styles.centrale}>
                <Image source = {{uri:"https://res.cloudinary.com/dlbahr9vn/image/upload/v1559207836/Hair%20Rocco/Imagine.png"}} style = {styles.immagine}/>
                <View style = {styles.ovale}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("ClienteMioProfilo")
                }
            }>
                <Text>
                    VISUALIZZA IL TUO PROFILO
                </Text>
                </TouchableOpacity>
                </View>
                <View style = {styles.ovale}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("ClientePrenotazioni")
                }
            }>
                <Text>
                    PRENOTAZIONI
                </Text>
                </TouchableOpacity>
                </View>
                <View style = {styles.ovale}>
                <TouchableOpacity>
                <Text onPress={()=>{
                    this.props.navigation.navigate("BookFoto")
                }
            }>
                    BOOK FOTO
                </Text>
                </TouchableOpacity>
                </View>
                <View style = {styles.ovale}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("ClienteRiepilogo")
                }
            }>
                <Text>
                    LE MIE PRENOTAZIONI
                </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    immagine:{
        height:160,
        width:130,
    },
    centrale: {
        justifyContent:"center",
        alignItems:"center",
    },
    ovale:{
        width:300,
        height:50,
        borderRadius:50,
        borderWidth:1,
        borderColor:"#ff0000",
        fontSize:25,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
        marginTop:30,
    },
})
export default ClienteMenu