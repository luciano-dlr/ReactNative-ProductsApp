import { StyleSheet } from 'react-native';
import { Icon, IconElement, useTheme } from '@ui-kitten/components';

interface Props {
    name:string;
    color?:string;
    white?:boolean;
}

export const MyIcon = ({ name,color,white=false }:Props) => {

    const theme = useTheme()
    // console.log("🚀 ~ MyIcon ~ theme:", theme['color-primary-400'])

    if (white) {
        color = theme['color-primary-100'];
    }else if (!color) {
        color = theme['text-basic-color']
    }else {
         color = theme[color] ?? theme['text-basic-color']
    }
   
    

  return <Icon style={styles.icon} fill={color} name={name}/>
}


const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });