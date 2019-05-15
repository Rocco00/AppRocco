import React from "react";
import {View,Text,Image,TouchableOpacity,TextInput,StyleSheet} from "react-native";
import {firebase} from "../config";
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mostraPassword:true
        }
    }
    render (){
        return (
            <View style = {styles.centrale}>
                <Image source = {require ("../logo.png")} style = {styles.principale} resizeMode = "contain" />
                <TouchableOpacity>
                 <Text style = {styles.registrati}>
                    REGISTRATI
                </Text>
                </TouchableOpacity>
                <TextInput textContentType = "emailAddress" placeholder = "EMAIL" style = {styles.rettangolo} onChangeText = {email => {
                                                                                                                                        this.setState({email})}
                                                                                                                                    }/>
        
                <TextInput textContentType = "password" placeholder = "PASSWORD" style = {styles.rettangolo} onChangeText = {password => this.setState({password})} secureTextEntry = {this.state.mostraPassword}/>
                <TouchableOpacity>
                <Text style = {styles.scrittura}>
                    Hai dimenticato la password ?
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                            if (this.state.email == null){
                                alert("EMAIL ERRATA")
                            }else if(this.state.password == null){
                                alert("PASSWORD ERRATA")  
                            }else{
                                console.log(this.state.email)
                                const email = this.state.email
                                console.log(this.state.password)
                                const password = this.state.password
                                firebase.auth().signInWithEmailAndPassword(email,password).then(email => {
                                    this.props.navigation.navigate("BarbierePrincipale")
                                }).catch(email => {
                                    alert("EMAIL E PASSWORD ERRATA")
                                })
                            }
                        }
                    }
                >
                    <Text style = {styles.login}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    principale: {
        width:"60%",
        height:"40%",
    },
    centrale: {
        justifyContent:"center",
        alignItems:"center",
    },
    registrati: {
        fontSize:25,
        textAlign:"center",
        marginBottom:5,
    },
    rettangolo: {
        borderWidth:1,
        borderColor:"#ff0000",
        fontSize:25,
        textAlign:"center",
        marginTop:15,
        marginBottom:15,
        padding:10,
        width:300,
    },
    scrittura: {
        fontSize:20,
        textAlign:"center",
    },
    login:{
        fontSize:25,
        textAlign:"center",
        marginTop:15,
        marginBottom:15,
    },
})
export default Login
