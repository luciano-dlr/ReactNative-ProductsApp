

import React from 'react';
import { Input, Layout, Text, Button } from '@ui-kitten/components';
import { ScrollView, useWindowDimensions } from 'react-native';
import { MyIcon } from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';


interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> { }




export const RegisterScreen = ({ navigation }: Props) => {

  const { height } = useWindowDimensions()


  return (
    <Layout style={{ flex: 1 }}>

      <ScrollView style={{ marginHorizontal: 40 }}>

        <Layout style={{ paddingTop: height * 0.30 }}>

          <Text
            category='h1'
            status='primary'

          >Crear cuenta</Text>
          <Text category='p2'> Por Favor, crea una cuenta para continuar </Text>

        </Layout>

        {/* Inputs */}
        <Layout style={{ marginTop: 20 }}>

          <Input

            placeholder='Nombre Completo'
            keyboardType='default'

            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name='person-outline' />}

          />
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
            Crear
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
            
          >Ya tienes cuenta?</Text>
          <Text status='primary' category='s1' onPress={() => navigation.goBack()} > Ingresar</Text>
        </Layout>





      </ScrollView>

    </Layout>
  )
}


