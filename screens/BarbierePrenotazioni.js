import React from "react";
import {View,} from "react-native";
import {Calendar} from "react-native-calendars";
class BarbierePrenotazioni extends React.Component {
    render (){
        return (
            <View>
                <Calendar
                    current = {"2012-05-15"}
                    minDate = {"2012-05-08"}
                    maxDate = {"2012-05-31"}
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
