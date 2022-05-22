import { useRef, useState } from "react";

enum Opearadores {
    sumar,restar,mutiplicar, dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const ultimaOperacion = useRef<Opearadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumbero = (numberoTexto:string )=> {
        //No aceptar multiples puntos
        if(numberoTexto === '.' && numero.includes('.')) return;
        // Son string por lo que se concatenan
        if(numero.startsWith("0") || numero.startsWith("-0")  ){
        //permitimos punto
        if(numberoTexto === '.'){
            setNumero(numero+numberoTexto);
            //permitimos multipes ceros cuando existe el punto
        }else if(numberoTexto === '0' && numero.includes(".")){
            setNumero(numero+numberoTexto); 
            // Evaluamos que se sustituya el cero
        }else if(numberoTexto !== '0' && !numero.includes(".") ){
            setNumero(numberoTexto);
        }else if(numberoTexto === '0'){
            setNumero(numero);
        }else{
            setNumero(numero+numberoTexto);
        }
        }else{
        setNumero(numero+numberoTexto);
        }
    }


    /**
     *Elimina el ulimo dijito 
    */
    const btnDelete = () => {

        if(numero.length  === 1 || (numero.length === 2 && numero.startsWith('-'))){
        setNumero('0')
        }else{
        setNumero(numero.substring(0,-1));
        }
    }

    /**
     * Cambia e signo de un numero
     */
    const positivoNegativo = () =>{
        if(numero.startsWith("-")){
        setNumero(numero.replace("-",""));
        }else if(numero !== '0'){
        setNumero("-"+numero);
        }
    }
    /**
     * Cambia el numero de abaja por e de arriba
     */
    const cambarNumPorAnterior = () => {
        if(numero.endsWith(".")){
        setNumero(numero.substring(0,-1));
        }else{
        setNumeroAnterior(numero);
        }

        setNumero('0');
    }

    /**
     * 
     */
    const btnDividir = () =>{
        cambarNumPorAnterior();
        ultimaOperacion.current = Opearadores.dividir;
    } 
    const btnMiltiplicar = () =>{
        cambarNumPorAnterior();
        ultimaOperacion.current = Opearadores.mutiplicar;
    }
    const btnRestar = () =>{
        cambarNumPorAnterior();
        ultimaOperacion.current = Opearadores.restar;
    } 
    const btnSumar = () =>{
        cambarNumPorAnterior();
        ultimaOperacion.current = Opearadores.sumar;
    } 

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch(ultimaOperacion.current){
        
        case Opearadores.dividir:
                setNumero(`${num2/num1}`);
            break;
        case Opearadores.mutiplicar:
                setNumero(`${num2*num1}`);
            break;
        case Opearadores.restar:
                setNumero(`${num2-num1}`);
            break;
        case Opearadores.sumar:
                setNumero(`${num2+num1}`);
            break;
        }

        setNumeroAnterior('0');
    }

    return {
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

    }
}
