import React from 'react';
import { Input, Layout, Text, Button } from '@ui-kitten/components';
import { ScrollView, useWindowDimensions } from 'react-native';
import { MyIcon } from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { API_URL, STAGE } from '@env';






interface Props extends StackScreenProps<RootStackParams,'LoginScreen'> {}


console.log({API_URL:API_URL,stage:STAGE});

export const LoginScreen = ( {navigation}:Props ) => {

  const { height } = useWindowDimensions()


  return (
    <Layout style={{ flex: 1 }}>

      <ScrollView style={{ marginHorizontal: 40 }}>

        <Layout style={{ paddingTop: height * 0.35 }}>

          <Text 
          category='h1' 
          status='primary'
          
          >Ingresar</Text>
          <Text category='p2'> Por Favor, ingresae para continuar </Text>

        </Layout>

        {/* Inputs */}
        <Layout style={{ marginTop: 20 }}>

          <Input

            placeholder='Correo electronico'
            keyboardType='email-address'
            autoCapitalize='none'
            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name='email-outline' />}

          />

          <Input

            placeholder='Contraseña'
            autoCapitalize='none'
            secureTextEntry
            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name='lock-outline' />}

          />


        </Layout>

        {/* Space */}
        <Layout style={{ height: 20 }} />

        {/* Button */}
        <Layout>
          <Button
            onPress={() => { }}
            accessoryRight={<MyIcon name='arrow-forward-outline' white />}

          >
            Ingesar
          </Button>
        </Layout>


        {/* Space */}
        <Layout style={{ height: 50 }} />


        {/* Info para crear cuenta */}

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
          <Text 
          
          >No tienes cuenta?</Text>
          <Text status='primary' category='s1' onPress={ ()=> navigation.navigate('RegisterScreen') } >  Crear Cuenta</Text>
        </Layout>



      </ScrollView>

    </Layout>
  )
}


