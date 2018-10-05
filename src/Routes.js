import { createStackNavigator } from 'react-navigation';
import Splash from './components/Splash';
import Login from './components/Login';

const Routes = createStackNavigator({
        Splash: {
            screen: Splash,
            navigationOptions: { 
                header: null 
            }
        },
        Login: {
            screen: Login,
            navigationOptions: { 
                header: null 
            }
        }
});

export default Routes;