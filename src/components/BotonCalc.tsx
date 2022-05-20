import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    texto: string;
    color?: string;
    ancho?: boolean
}

export const BotonCalc = ({texto, color = "#2D2D2D", ancho= false}: Props) => {
  return (
    // Es una forma de resoverlo programticamente 
    //IMPORTATE CAMBIA LOS ESTOS PARA QUE FUNCIONE SIN CALCULOS CON EL FLEX 1
    // <View style={[styles.boton, (color) ?{backgroundColor: color}:{},(ancho)? {flex:1}:{width:80} ]}>
    <View style={{...styles.boton, backgroundColor: color, width: (ancho)? 180:80}}>
        <Text style={{...styles.botonText, color: color ==="#9B9B9B"? 'black': 'white'}}>
            {texto}
        </Text>
    </View>
  )
}
