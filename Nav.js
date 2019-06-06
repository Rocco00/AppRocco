import {createAppContainer, createStackNavigator} from "react-navigation";
import Login from "./screens/Login";
import BarbierePrincipale from "./screens/BarbierePrincipale";
import BarbierePrenotazioni from "./screens/BarbierePrenotazioni";
import BarbiereRiepilogo from "./screens/BarbiereRiepilogo";
import BookFoto from "./screens/BookFoto";
import ClienteRegistrazione from "./screens/ClienteRegistrazione";
import ClienteMenu from "./screens/ClienteMenu";
import ClienteMioProfilo from "./screens/ClienteMioProfilo";
import ClientePrenotazioni from "./screens/ClientePrenotazioni";
import ClienteRiepilogo from "./screens/ClienteRiepilogo";
import ClientePrenotazioneConfermata from "./screens/ClientePrenotazioneConfermata";
import ClienteOrario from "./screens/ClienteOrario";
import ClienteConfermiLaPrenotazione from "./screens/ClienteConfermiLaPrenotazione";
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
    ClienteMenu:{
        screen:ClienteMenu,
    },
    ClienteMioProfilo:{
        screen:ClienteMioProfilo,
    },
    ClientePrenotazioni:{
        screen:ClientePrenotazioni,
    },
    ClienteRiepilogo:{
        screen:ClienteRiepilogo,
    },
    ClientePrenotazioneConfermata:{
        screen:ClientePrenotazioneConfermata,
    },
    ClienteOrario:{
        screen:ClienteOrario,
    },
    ClienteConfermiLaPrenotazione:{
        screen:ClienteConfermiLaPrenotazione
    },
})
const app = createAppContainer(LoginNavigation)
export default app