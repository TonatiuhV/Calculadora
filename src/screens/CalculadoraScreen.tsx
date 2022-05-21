import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0')

  const limpiar = () => {
    setNumero('0');
  }

  const armarNumbero = (numberoTexto:string )=> {
    // Son string por lo que se concatenan
    setNumero(numero+numberoTexto);
  }

  return (
    <View style={styles.caculadoraContainer}>
        <Text style={styles.resultadoPequeno}>
            {numeroAnterior}
        </Text>
        <Text style={styles.resultado}
          numberOfLines={1} // numero de lineas
          adjustsFontSizeToFit // ajustar el ttamño de texto de acuerdo al tamaño
        >
            {numero}
        </Text>
          {/*#2D2D2D  Gris oscuro */}
          {/*#9B9B9B  Gris claro */}
          {/*#FF9427  Naranja */}
        {/* Fila boton */}
        <View style={styles.fila}>
          <BotonCalc texto="C" color="#9B9B9B" action={limpiar}/>
          <BotonCalc texto="+/-" color="#9B9B9B" action={limpiar}/>
          <BotonCalc texto="del" color="#9B9B9B" action={limpiar}/>
          <BotonCalc texto="/" color="#FF9427" action={limpiar}/>
        </View>
        {/* Fila boton */}
        <View style={styles.fila}>
          <BotonCalc texto="7" action={armarNumbero}/>
          <BotonCalc texto="8" action={armarNumbero}/>
          <BotonCalc texto="9" action={armarNumbero}/>
          <BotonCalc texto="x" color="#FF9427" action={limpiar}/>
        </View>
        {/* Fila boton */}
        <View style={styles.fila}>
          <BotonCalc texto="4" action={armarNumbero}/>
          <BotonCalc texto="5" action={armarNumbero}/>
          <BotonCalc texto="6" action={armarNumbero}/>
          <BotonCalc texto="-" color="#FF9427" action={limpiar}/>
        </View>
        {/* Fila boton */}
        <View style={styles.fila}>
          <BotonCalc texto="1" action={armarNumbero}/>
          <BotonCalc texto="2" action={armarNumbero}/>
          <BotonCalc texto="3" action={armarNumbero}/>
          <BotonCalc texto="+" color="#FF9427" action={limpiar}/>
        </View>
        {/* Fila boton */}
        <View style={styles.fila}>
          <BotonCalc texto="0" ancho action={armarNumbero}/>
          <BotonCalc texto="." action={armarNumbero}/>
          <BotonCalc texto="=" color="#FF9427" action={limpiar}/>
        </View>
    </View>
  )
}
