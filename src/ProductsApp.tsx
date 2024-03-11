import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { useColorScheme } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export const ProductsApp = () => {

  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;
  const backGroundColor = (colorScheme === 'dark')
  ? theme['color-primary-800']
  : theme['color-primary-100']

  return (
    <>
    
    <IconRegistry icons={EvaIconsPack} />

    <ApplicationProvider {...eva} theme={theme}>

      <NavigationContainer theme={{
        dark:colorScheme === 'dark',
        colors:{
          primary:theme['color-primary-500'],
          background:backGroundColor,
          card:theme['color-primary-100'],
          text:theme['text-basic-color'],
          border:theme['color-basic-600'],
          notification:theme['color-primary-500']
        }
      }}>
        <StackNavigator />
      </NavigationContainer>

    </ApplicationProvider>
    </>
  )
}


