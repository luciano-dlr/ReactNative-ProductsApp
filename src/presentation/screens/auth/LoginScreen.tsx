import React, { useState } from 'react';
import { Input, Layout, Text, Button } from '@ui-kitten/components';
import { Alert, ScrollView, TextInput, useWindowDimensions } from 'react-native';
import { MyIcon } from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { API_URL, STAGE } from '@env';
import { useAuthStore } from '../../store/auth/useAuthStore';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> { }

// console.log({ API_URL: API_URL, stage: STAGE });

export const LoginScreen = ({ navigation }: Props) => {

  const { login } = useAuthStore()
  const [isPosting, setIsPosting] = useState(false)

  
  
  const [form, setForm] = useState({
    email: '',
    password: '',

  })
  const { height } = useWindowDimensions()

  const onLogin = async () => {
    const wasSuccessful = await login(form.email, form.password);
    if (wasSuccessful) {
      setIsPosting(true)
      navigation.navigate('HomeScreen')
      
      
    }else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
      setIsPosting(false)
    }
  };

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
            value={form.email}
            onChangeText={(email) => setForm({ ...form, email })}
            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name='email-outline' />}
          />

          <Input
            placeholder='Contraseña'
            autoCapitalize='none'
            secureTextEntry
            value={form.password}
            onChangeText={(password) => setForm({ ...form, password })}
            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name='lock-outline' />}
          />


        </Layout>

        <Text>{JSON.stringify(form, null, 4)}</Text>

        {/* Space */}
        <Layout style={{ height: 20 }} />

        {/* Button */}
        <Layout>
          <Button disabled={isPosting} onPress={onLogin} accessoryRight={<MyIcon name='arrow-forward-outline' white />}>
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
          <Text>
            No tienes cuenta?
          </Text>
          <Text status='primary' category='s1' onPress={() => navigation.navigate('RegisterScreen')} >  Crear Cuenta</Text>
        </Layout>
      </ScrollView>
    </Layout>
  )
}


