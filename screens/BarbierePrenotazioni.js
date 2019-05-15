import React from "react";
import {View,} from "react-native";
import {Calendar} from "react-native-calendars";
class BarbierePrenotazioni extends React.Component {
    render (){
        return (
            <View>
                <Calendar
                    current = {new Date()}
                    monthFormat = {"yyyy MMMM"}
                    hideExtraDays = { true }
                    hideArrows = { false }
                    firstDay = { 1 }
                    onDayPress ={(day)=>{
                        this.props.navigation.navigate("BarbiereRiepilogo")}}
                />
            </View>
    )
        }
    }
export default BarbierePrenotazioni
