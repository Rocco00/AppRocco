import React from "react";
import {View,Text,Image,TouchableOpacity,TextInput,StyleSheet} from "react-native";
import {firebase,db} from "../config";
import { Ionicons } from "@expo/vector-icons";
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:"roky2000@hotmail.it",
            password:"prova00",
            mostraPassword:true
        }
    }
    render (){
        return (
            <View style = {styles.centrale}>
                <Image source = {require ("../logo.png")} style = {styles.principale} resizeMode = "contain" />
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("ClienteRegistrazione")
                }
            }>
                 <Text style = {styles.registrati}>
                    REGISTRATI
                </Text>
                </TouchableOpacity>
                <TextInput textContentType = "emailAddress" autoCapitalize = "none" placeholder = "EMAIL" style = {styles.rettangolo} defaultValue={this.state.email} onChangeText = {email => {
                                                                                                                                        this.setState({email})}
                
                                                                                                                                 }/>
                <View style = {styles.occhioPassword}>
                    <TouchableOpacity style = {styles.viewPassword} onPress={()=>{
                        if (this.state.mostraPassword==false){
                            this.setState({mostraPassword:true})
                        }else{
                            this.setState({mostraPassword:false})
                        }
                                }}>
                        
                        <Ionicons name= "ios-eye" size ={35}/>
                    </TouchableOpacity>
                
                    <TextInput textContentType = "password" placeholder = "PASSWORD" style = {styles.rettangolo} defaultValue={this.state.password} onChangeText = {password => this.setState({password})} secureTextEntry = {this.state.mostraPassword}/>
                </View>
                <TouchableOpacity>
                <Text style = {styles.scrittura}>
                    Hai dimenticato la password ?
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("ClienteMenu")
                      console.log(this.state.email)
                      const email = this.state.email
                      console.log(this.state.password)
                      const password = this.state.password
                      if ( email == null){
                          alert("EMAIL ERRATA")
                      }else if(password == null){
                          alert("PASSWORD ERRATA")  
                      }else{                    
                          firebase.auth().signInWithEmailAndPassword(email,password).then(utente => {
                              //this.props.navigation.navigate("BarbierePrincipale")
                              var navigation=this.props.navigation
                              console.log(utente)
                              const risultato=db.ref("utenti/"+utente.user.uid).once("value").then(function(snapshot){
                                  var utente = snapshot.val() 
                                  console.log(utente)
                                  if(utente.tipo=="barbiere"){
                                    navigation.navigate("BarbierePrincipale")
                                    
                                  }else if (utente.tipo=="cliente"){
                                          //aprire schermo del cliente
                                      }
                                  
                              })
                              
                          }).catch(errore => {
                              console.log(errore) //alert("EMAIL E PASSWORD ERRATA")
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
    viewPassword:{
        position:"absolute",
        right:5,
        top:"32%",
        zIndex:1,
    },
    occhioPassword:{
        position:"relative",
        flexDirection:"row",
    },
})
export default Login
