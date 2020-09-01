import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "./src/screens/LoginScreen"
import SignupScreen from "./src/screens/SignupScreen"
import HomeScreen from "./src/screens/HomeScreen"
import AddParts from "./src/screens/AddParts"
import PartsDetail from "./src/screens/PartsDetail"
import AddDocument from './src/screens/AddDocument';
//import Componentscreen from "./src/screens/ComponentsScreen"
//import ListScreen from "./src/screens/ListScreen"

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Signup:SignupScreen,
    Home:HomeScreen,
    AddPart:AddParts,
    PartsDetail:PartsDetail,
    AddDocument:AddDocument
   // Components:Componentscreen,
   // ListScreens:ListScreen,
   

  },
  {
    initialRouteName: "Login",
    //defaultNavigationOptions: {
    //  title: "App"
    //}
  }
);

export default createAppContainer(navigator);

