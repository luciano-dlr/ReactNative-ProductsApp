import { StackCardStyleInterpolator, createStackNavigator } from '@react-navigation/stack';
import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/product/ProductScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { HomeWorkScreen } from '../screens/homeWork/HomeWorkScreen';

export type RootStackParams = {
    LoadingScreen: undefined;
    LoginScreen: undefined;
    RegisterScreen: undefined;
    HomeScreen: undefined;
    ProductScreen: { productId: string };
    HomeWorkScreen:undefined;
    
}


const Stack = createStackNavigator<RootStackParams>();


const fadeAnimation: StackCardStyleInterpolator = ({current}) => {

    return {
        cardStyle:{
            opacity:current.progress,
            
        }
    }

}



export const StackNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='LoginScreen'
        screenOptions={{
            headerShown:false,
            // cardStyleInterpolator:fadeAnimation
        }}>
            <Stack.Screen 
            options={{cardStyleInterpolator:fadeAnimation}} 
            name="LoadingScreen" 
            component={LoadingScreen} />
            <Stack.Screen 
            options={{cardStyleInterpolator:fadeAnimation}} 
            name="LoginScreen" 
            component={LoginScreen} />
            <Stack.Screen 
            options={{cardStyleInterpolator:fadeAnimation}} 
            name="RegisterScreen" 
            component={RegisterScreen} />
            <Stack.Screen 
            options={{cardStyleInterpolator:fadeAnimation}} 
            name="HomeScreen" 
            component={HomeScreen} />
            <Stack.Screen 
            name="ProductScreen" 
            component={ProductScreen} />
            <Stack.Screen 
            options={{cardStyleInterpolator:fadeAnimation}} 
            name="HomeWorkScreen" 
            component={HomeWorkScreen} />
        </Stack.Navigator>
    );
}