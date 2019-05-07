import {createAppContainer, createStackNavigator} from "react-navigation";
import Login from "./screens/Login";
import Principale from "./screens/Principale";
import Prenotazioni from "./screens/Prenotazioni";
import Riepilogo from "./screens/Riepilogo";
const LoginNavigation = createStackNavigator({
    Login:{
        screen:Login,
    },
    Principale:{
        screen:Principale,
    },
    Prenotazioni:{
        screen:Prenotazioni,
    },
    Riepilogo:{
        screen:Riepilogo,
    },
})
const app = createAppContainer(LoginNavigation)
export default app