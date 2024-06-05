import { useNavigation } from '@react-navigation/native';
import { PropsWithChildren, useEffect } from 'react';
import { useAuthStore } from '../store/auth/useAuthStore';
import { RootStackParams } from '../navigation/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

export const AuthProvider = ({children}: PropsWithChildren) =>  {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
    const { checkStatus, status } = useAuthStore();

    useEffect(() => {
        checkStatus();
    }, []);

    useEffect(() => {
        if (status !== 'checking') {
            if (status === 'authenticated') {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeScreen' }]
                });
            } else if (status === 'unauthenticated') {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'LoginScreen' }]
                });
            }
        }
    }, [status, navigation]);

    return (
        <>{children}</>
    );
}
