import React from "react";
import {View,Image,StyleSheet} from "react-native";
class BookFoto extends React.Component {
    render (){
        return (
            <View style = {styles.centrale}>
                <Image source = {{uri:"https://res.cloudinary.com/dlbahr9vn/image/upload/v1557394549/Hair%20Rocco/capelli-corti-uomo-2019-9.jpg"}} style = {styles.immagine}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    immagine:{
        height:140,
        width:100,
    },
    centrale: {
        justifyContent:"center",
        alignItems:"center",
    },
})
export default BookFoto 