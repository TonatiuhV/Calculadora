import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'


export const CalculadoraScreen = () => {
  const { 
      numeroAnterior,
      numero,
      armarNumbero,
      limpiar,
      positivoNegativo,
      btnDelete,
      btnDividir,
      btnMiltiplicar,
      btnRestar,
      btnSumar,
      calcular
   } = useCalculadora()
  return (
    <View style={styles.caculadoraContainer}>
        {
          (numeroAnterior !== '0') && (
          <Text style={styles.resultadoPequeno}>
            {numeroAnterior}
          </Text>)
        }
        
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
          <BotonCalc texto="+/-" color="#9B9B9B" action={positivoNegativo}/>
          <BotonCalc texto="del" color="#9B9B9B" action={btnDelete}/>
          <BotonCalc texto="/" color="#FF9427" action={btnDividir}/>
        </View>
        {/* Fila boton */}
        <View style={styles.fila}>
          <BotonCalc texto="7" action={armarNumbero}/>
          <BotonCalc texto="8" action={armarNumbero}/>
          <BotonCalc texto="9" action={armarNumbero}/>
          <BotonCalc texto="x" color="#FF9427" action={btnMiltiplicar}/>
        </View>
        {/* Fila boton */}
        <View style={styles.fila}>
          <BotonCalc texto="4" action={armarNumbero}/>
          <BotonCalc texto="5" action={armarNumbero}/>
          <BotonCalc texto="6" action={armarNumbero}/>
          <BotonCalc texto="-" color="#FF9427" action={btnRestar}/>
        </View>
        {/* Fila boton */}
        <View style={styles.fila}>
          <BotonCalc texto="1" action={armarNumbero}/>
          <BotonCalc texto="2" action={armarNumbero}/>
          <BotonCalc texto="3" action={armarNumbero}/>
          <BotonCalc texto="+" color="#FF9427" action={btnSumar}/>
        </View>
        {/* Fila boton */}
        <View style={styles.fila}>
          <BotonCalc texto="0" ancho action={armarNumbero}/>
          <BotonCalc texto="." action={armarNumbero}/>
          <BotonCalc texto="=" color="#FF9427" action={calcular}/>
        </View>
    </View>
  )
}
