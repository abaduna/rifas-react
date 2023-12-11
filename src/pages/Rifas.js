import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {Container} from "react-bootstrap"
import { db } from '../confic/firebase'
import {AddNumeros} from "../Hoocks/useAddNumber"
import Numeros from './Numeros'
function Rifas() {
    const [numero,setNumero] = useState("")    
    const [nombre,setNombre] = useState("")  
    const [funcionTerminada,setFuncionTerminada] = useState(false)    
    
    const handlerMandaData=async()=>{
        setFuncionTerminada(true)
        console.log(`click`);
        const transactionColectionRef = collection(db,"numeros")
        const querySnapshot = await getDocs(transactionColectionRef);
        const data = querySnapshot.docs.map((doc) => doc.data().numero);  
        
        if (data.find((element) => element === numero)) {
            setFuncionTerminada(false);
            alert('Ya está ese número');
            console.log('El número ya está en el array');
            return;
          }
        AddNumeros({
            numero,
            nombre
        })
        setFuncionTerminada(false)
        setNombre("")
        setNumero("")
    }
    useEffect(()=>{
        
    },[funcionTerminada])

  return (

    <>
    <h1>Rifas</h1>
    <label>El numero que queres </label>
    <input placeholder='Numeo que quieres comprar'onChange={(e)=>setNumero(e.target.value)} type='number' />
    <label>A nombre de quien esta</label>
    <input placeholder='Quien sos?'onChange={(e)=>setNombre(e.target.value)} type='string' />
    <button onClick={handlerMandaData}>Subir data</button>
    <Container>
        <spam>1</spam>
    </Container>
    <Numeros></Numeros> 
    </>
  )
}

export default Rifas