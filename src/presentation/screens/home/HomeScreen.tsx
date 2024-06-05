import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import { useAuthStore } from '../../store/auth/useAuthStore';

export const HomeScreen = () => {

  const { logout  } = useAuthStore()



  return (
    <Layout style={{flex:1,justifyContent:'center',alignItems:'center'}}>

      <Text
        style={styles.text}
        category='h1'
      >
        Home Screen
      </Text>

      {/* <Icon name='home' /> */}

      <Button 
      onPress={logout}
      accessoryLeft={<Icon name='log-out-outline' />}>Cerrar Session</Button>

    </Layout>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    margin: 2,
  },
});
