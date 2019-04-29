import React from "react";
import {View,Text,Image,TouchableOpacity,TextInput} from "react-native";
class Login extends React.Component {
    render (){
        return (
            <View>
                <Image source = {require ("../logo.png")} />
                <Text>
                    REGISTRATI
                </Text>
                <TextInput textContentType = "emailAdress" placeholder = "EMAIL" />
                <TextInput textContentType = "password" placeholder = "PASSWORD" />
            </View>
        )
    }
}
export default Login
