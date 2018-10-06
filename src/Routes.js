import { createStackNavigator } from 'react-navigation';
import Splash from './components/Splash';
import Login from './components/Login';
import Chat from './components/Chat';

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
        },
        Chat: {
            screen: Chat,
            navigationOptions: { 
                header: null 
            }
        },
      
});

export default Routes;