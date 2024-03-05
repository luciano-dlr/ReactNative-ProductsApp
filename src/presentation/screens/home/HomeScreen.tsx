import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Icon, Layout, Text } from '@ui-kitten/components';

export const HomeScreen = () => {
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
      accessoryLeft={<Icon name='home' />}>Cerrar Session</Button>

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
