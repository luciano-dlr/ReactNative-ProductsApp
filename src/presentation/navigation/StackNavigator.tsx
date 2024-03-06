import { createStackNavigator } from '@react-navigation/stack';
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


export const StackNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='HomeWorkScreen'
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
            <Stack.Screen name="HomeWorkScreen" component={HomeWorkScreen} />
        </Stack.Navigator>
    );
}