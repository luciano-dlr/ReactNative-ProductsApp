import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      margin: 2,
    },
    touchableItem:{
      padding:30,
      gap:10,
      borderRadius:12,
      borderWidth:1,
      backgroundColor:'rgba(0,0,0,0.6)',
      flexDirection:'row'

    },
    selectedTouchableItem:{
      backgroundColor:'rgba(0,0,0,0.1)'

    }
  });
  