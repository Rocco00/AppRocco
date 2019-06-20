import React from "react";
import {View,Text,Image,TouchableOpacity,TextInput,StyleSheet,KeyboardAvoidingView} from "react-native";
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
            <KeyboardAvoidingView style = {styles.centrale} behavior = "position" enabled >
                 <View style = {styles.formatoImmagine } >
                 <Image source = {require ("../logo.png")} style = {styles.principale} resizeMode = "contain" />
                 </View>
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
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("HaiDimenticatoLaPassword")
                }
            }>
                <Text style = {styles.scrittura}>
                    Hai dimenticato la password ?
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
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
                              var uid 
                              uid = utente.user.uid
                              console.log(utente)
                              const risultato=db.ref("utenti/"+uid).once("value").then(function(snapshot){
                                  var utente = snapshot.val()
                                  global.utente=utente //serve per sapere il tipo di utente in qualsiasi schermo
                                  global.utenteuid=uid // serve per sapere ID dell'utente
                                  if(utente.tipo=="barbiere"){
                                    navigation.navigate("BarbierePrincipale")
                                    
                                  }else if (utente.tipo=="cliente"){
                                    navigation.navigate("ClienteMenu")
                                      }
                                  
                              })
                              
                          }).catch(errore => {
                              console.log(errore) 
                              alert("EMAIL O PASSWORD ERRATA")
                          })
                      }
                  }
              }   
         >
                    <Text style = {styles.login}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    principale: {
        width:260,
        height:240,
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
    formatoImmagine:{
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
    },
})
export default Login
