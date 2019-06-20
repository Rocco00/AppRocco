import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,TextInput} from "react-native";
import {firebase} from "../config";
class HaiDimenticatoLaPassword extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <View>
                <View>
                    <Text style = {styles.testo}>
                        RECUPERA LA TUA PASSWORD 
                    </Text>
                </View>
                <View>
                    <Text style = {styles.testo}>
                    Inserisci l'indirizzo e-mail per cercare il tuo account 
                    </Text>
                </View>
                <View>
                    <TextInput textContentType = "emailAddress" autoCapitalize = "none" style = {styles.rettangoloBlu} onChangeText = {email => {
                                                                                                                                        this.setState({email})}
                
                                                                                                                                 }/>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        const email = this.state.email
                        var navigation=this.props.navigation
                        if ( email == null){
                            alert("EMAIL ERRATA")
                        }else{
                            console.log(email)
                            firebase.auth().sendPasswordResetEmail(email).then(function(){
                                navigation.navigate("EmailRecuperoPassword")
                            }).catch(function(error){
                                console.log(error)
                                alert("EMAIL ERRATA")
                            })
                        }
                    }}>
                        <Text style = {styles.testo}>
                        CERCA
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("Login")
                }
            }>
                        <Text style = {styles.testo}>
                            ANNULLA
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
    marginBottom:30,
 },
    rettangoloBlu:{
        borderWidth:1,
        borderColor:"#0000ff",
        fontSize:15,
        textAlign:"center",
        marginTop:30,
        marginBottom:30,
        padding:10,
    },
    testo:{
        fontSize:25,
        textAlign:"center",
        marginBottom:50,
    },
})
export default HaiDimenticatoLaPassword