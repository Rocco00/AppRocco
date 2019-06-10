import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView} from "react-native";
class ClienteMioProfilo extends React.Component {
    render (){
        return (
            <KeyboardAvoidingView behavior = "padding" enabled>
                <View style = {styles.centrale}>
                    <Text style = {styles.ovale1}>
                    MIO PROFILO 
                    </Text>
                </View>
                    <Text>
                        NOME
                    </Text>
                    <TextInput textContentType = "name" style = {styles.rettangoloRosso} onChangeText ={nome =>{
                                                                                                            this.setState({nome})}
                                                                                                        }/>
                    <Text>
                        COGNOME
                    </Text>
                    
                    <TextInput textContentType = "name" style = {styles.rettangoloBlu} onChangeText ={cognome =>{
                                                                                                            this.setState({cognome})}
                                                                                                        }/>
                    <Text>
                        E-MAIL
                    </Text>
                    <TextInput textContentType = "emailAddress" style = {styles.rettangoloRosso} onChangeText ={email =>{
                                                                                                            this.setState({email})}
                                                                                                        }/>
                    <Text>
                        PASSWORD
                    </Text>
                    <TextInput textContentType = "password" style = {styles.rettangoloBlu} onChangeText ={password =>{
                                                                                                            this.setState({password})}
                                                                                                        }/>
                    <Text>
                        CELLULARE
                    </Text>
                    <TextInput textContentType = "telephoneNumber" style = {styles.rettangoloRosso} onChangeText ={cellulare =>{
                                                                                                            this.setState({cellulare})}
                                                                                                        }/>
                    <Text>
                        SHOP
                    </Text>
                    <TextInput textContentType = "none" style = {styles.rettangoloBlu} onChangeText ={shop =>{
                                                                                                            this.setState({shop})}
                                                                                                        }/>
                    <View style = {styles.centrale}>
                    <TouchableOpacity>
                    <Text style = {styles.ovale1}>
                        SALVA
                    </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
export default ClienteMioProfilo
