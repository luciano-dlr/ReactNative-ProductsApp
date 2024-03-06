import React, { useState } from 'react'
import { View, StyleSheet, TextInput, FlatList, TouchableOpacity, Modal, Image } from 'react-native'
import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import { styles } from './styleHomeWorkScreen';
import { useHomeWorkScreenController } from './useHomeWorkScreenController';


export const HomeWorkScreen = () => {

  const { fetchData, userData, number, setNumber } = useHomeWorkScreenController()


  const [selectedItem, setSelectedItem] = useState<any>()
  const [modalVisible, setModalVisible] = useState(false)
  




  console.log("🚀 ~ HomeWorkScreen ~ selectedItem:", JSON.stringify(selectedItem,null,4))
  

  const handleFechController = () => {

    fetchData()

  }


  const handleSingleItem = (item:any) => {

    setSelectedItem(item)
    setModalVisible(true)
    
  }

  const handleCloseModal = () => {

    setModalVisible(false)
    setSelectedItem(undefined)

  }
 

  return (


    <Layout style={{ flex: 1,paddingVertical:50,paddingHorizontal:10,gap:20 }}>

      <Text
        style={styles.text}
        category='h1'
      >
        Home Work Choski
      </Text>

      <TextInput
        style={{ backgroundColor: 'gray' }}
        value={number}
        onChangeText={(text: string) => setNumber(text)}


        placeholder="Ingresar cantidad de usuarios a ver"
        keyboardType="numeric"
      />

      <Button onPress={handleFechController} appearance='outline' activeOpacity={0.7}>
        Buscar
      </Button>

      <View >

        <FlatList
          
          data={userData}
          contentContainerStyle={{gap:20}}

          renderItem={({ item }) => (

            <TouchableOpacity
            activeOpacity={0.8}
            style={[
              
              styles.touchableItem,
              
              selectedItem?.id === item?.id && styles.selectedTouchableItem
          
            ]}
            
            onPress={() => handleSingleItem(item)}
            >
              
              <View>
                <Image
                style={{width:100,height:100}}
                source={{uri:item?.avatar}}
                />
                
              </View>
              <View>
              <Text
                style={{ ...styles.text, fontSize:30,fontWeight:'900',color:'white'}}
                category='h6'
              >
              Id: {item?.id}
              </Text>
              <Text
                style={styles.text}
                category='h6'
              >
                First name: {item?.first_name}
              </Text>
              <Text
                style={styles.text}
                category='h6'
              >
              Last name: {item?.last_name}
              </Text>
              </View>
              
              
            </TouchableOpacity>
          )

          }
          keyExtractor={(item) => item.id.toString()}

        />

      </View>

      <Modal
      visible={modalVisible}
      animationType='fade'
      onRequestClose={()=> setModalVisible(false)}
      transparent
      style={{flex:1}}
      
      >
        <Layout style={{backgroundColor:'rgba(0,0,0,0.9)',padding:20}}>
           <Text
                style={{ ...styles.text, fontSize:30,fontWeight:'900',color:'white'}}
                category='h6'
              >
                {selectedItem?.id}
              </Text>
              <Text
                style={{ ...styles.text, fontSize:20,fontWeight:'900',color:'white'}}
                category='h6'
              >
                {selectedItem?.first_name} {selectedItem?.last_name}
              </Text>
              <Text
                style={{ ...styles.text, fontSize:20,fontWeight:'900',color:'white'}}
                category='h6'
              >
                {selectedItem?.email}
              </Text>
              <Text
                style={{ ...styles.text, fontSize:20,fontWeight:'900',color:'white'}}
                category='h6'
              >
                {selectedItem?.phone_number}
              </Text>
              <Text
                style={{ ...styles.text, fontSize:18,fontWeight:'900',color:'white'}}
                category='h6'
              >
              Country: {selectedItem?.address?.country}
              </Text>

      <Button onPress={ handleCloseModal} appearance='outline' activeOpacity={0.7} >
          Cerrar Papi
      </Button>
        </Layout>

      

        


      </Modal>







    </Layout>
  )
}
