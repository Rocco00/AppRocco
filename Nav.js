import {createAppContainer, createStackNavigator} from "react-navigation";
import Login from "./screens/Login";
import BarbierePrincipale from "./screens/BarbierePrincipale";
import BarbierePrenotazioni from "./screens/BarbierePrenotazioni";
import BarbiereRiepilogo from "./screens/BarbiereRiepilogo";
import BookFoto from "./screens/BookFoto";
import ClienteRegistrazione from "./screens/ClienteRegistrazione";
const LoginNavigation = createStackNavigator({
    Login:{
        screen:Login,
    },
    BarbierePrincipale:{
        screen:BarbierePrincipale,
    },
    BarbierePrenotazioni:{
        screen:BarbierePrenotazioni,
    },
    BarbiereRiepilogo:{
        screen:BarbiereRiepilogo,
    },
    BookFoto:{
        screen:BookFoto,
    },
    ClienteRegistrazione:{
        screen:ClienteRegistrazione,
    },
})
const app = createAppContainer(LoginNavigation)
export default app 