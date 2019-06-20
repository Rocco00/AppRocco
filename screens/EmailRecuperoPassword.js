import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,Image} from "react-native";
class EmailRecuperoPassword extends React.Component {
    render(){
        return(
            <View style = {styles.centrale}>
                <View>
                    <Text style = {styles.testo}>
                        ABBIAMO INVIATO LA PROCEDURA PER IL RECUPERO DELLA PASSWORD
                    </Text>
                </View>
                <View>
                <Image source = {require ("../email.png")} style = {styles.immagine} resizeMode = "contain"/>
                </View>
                <View>
                    <Text style = {styles.testo}>
                        CONTROLLA LA TUA POSTA ELETTRONICA
                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("Login")
                }
            }>
                        <Text style = {styles.testo}>
                        RITORNA ALL' ACCESSO
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
    immagine:{
        height:180,
        width:180,
        marginBottom:30,
        marginTop:30,
    },
})
export default EmailRecuperoPassword
