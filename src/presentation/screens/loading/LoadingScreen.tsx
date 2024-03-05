import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Layout, Text } from '@ui-kitten/components';

export const LoadingScreen = () => {
  return (
    <Layout>

      <Text
        style={styles.text}
        category='h1'
      >
        Loading Screen
      </Text>

      <Button>Cerrar Session</Button>

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

