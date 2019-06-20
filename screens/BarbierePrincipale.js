import React from "react";
import {View,Image,StyleSheet,Text,TouchableOpacity} from "react-native";
class BarbierePrincipale extends React.Component {
    render () {
        return (
            <View style = {styles.centrale}>
                <Image source = {require ("../Imagine.png")} style = {styles.logo} resizeMode = "contain" />
                <Image source = {require ("../calendario.png")} style = {styles.principale} resizeMode = "contain" />
                <View style = {styles.ovale2}>
               <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("BarbierePrenotazioni")}}>
                <Text style = {styles.testo}>
                    PRENOTAZIONI
                </Text>
                </TouchableOpacity>
                </View>
                <Image source = {require ("../bookfoto.png")} style = {styles.principale} resizeMode = "contain" />
                <View style = {styles.ovale3}> 
                <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("BookFoto")}}>
                <Text style = {styles.testo}>
                    BOOK FOTO
                </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    logo:{
        width:"50%",
        height:"25%",
        marginTop:30,
    },
    principale: {
        width:"30%",
        height:"20%",
        marginTop:30,
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
    centrale: {
        justifyContent:"center",
        alignItems:"center",
    },
    ovale1:{
            width:100,
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
        },
    testo:{
            fontSize:25,
            textAlign:"center",
        },
    ovale2:{
        width:210,
        height:80,
        borderRadius:50,
        borderWidth:1,
        borderColor:"#ff0000",
        fontSize:25,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
    },
    ovale3:{
        width:180,
        height:60,
        borderRadius:50,
        borderWidth:1,
        borderColor:"#ff0000",
        fontSize:25,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
    },
})
export default BarbierePrincipale 
