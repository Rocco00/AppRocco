import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from "react-native";
class ClienteRegistrazione extends React.Component {
    render (){
        return (
            <View>
                <View style = {styles.centrale}>
                    <Text style = {styles.ovale1}>
                        REGISTRAZIONE 
                    </Text>
                </View>
                    <Text>
                        NOME
                    </Text>
                    <TouchableOpacity>
                    <TextInput textContentType = "nome" style = {styles.rettangoloRosso}/>
                    </TouchableOpacity>
                    <Text>
                        COGNOME
                    </Text>
                    <TouchableOpacity>
                    <TextInput textContentType = "nome" style = {styles.rettangoloBlu}/>
                    </TouchableOpacity>
                    <Text>
                        E-MAIL
                    </Text>
                    <TouchableOpacity>
                    <TextInput textContentType = "nome" style = {styles.rettangoloRosso}/>
                    </TouchableOpacity>
                    <Text>
                        PASSWORD
                    </Text>
                    <TouchableOpacity>
                    <TextInput textContentType = "nome" style = {styles.rettangoloBlu}/>
                    </TouchableOpacity>
                    <Text>
                        CELLULARE
                    </Text>
                    <TouchableOpacity>
                    <TextInput textContentType = "nome" style = {styles.rettangoloRosso}/>
                    </TouchableOpacity>
                    <Text>
                        SHOP
                    </Text>
                    <TouchableOpacity>
                    <TextInput textContentType = "nome" style = {styles.rettangoloBlu}/>
                    </TouchableOpacity>
                    <View style = {styles.centrale}>
                    <TouchableOpacity>
                    <Text style = {styles.ovale1}>
                        CONFERMA 
                    </Text>
                    </TouchableOpacity>
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
    ovale1:{
        width:230,
        height:40,
        borderRadius:50,
        borderWidth:1,
        borderColor:"#808080",
        fontSize:25,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
    },
    rettangoloRosso:{
        borderWidth:1,
        borderColor:"#ff0000",
        fontSize:15,
        textAlign:"center",
        marginTop:5,
        marginBottom:5,
        padding:5,
    },
    rettangoloBlu:{
        borderWidth:1,
        borderColor:"#0000ff",
        fontSize:15,
        textAlign:"center",
        marginTop:5,
        marginBottom:5,
        padding:5,
    },
})
export default ClienteRegistrazione