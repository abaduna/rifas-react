import { addDoc, collection, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {Container} from "react-bootstrap"
import { db } from '../confic/firebase'
import {AddNumeros} from "../Hoocks/useAddNumber"

function Rifas() {
    const [numero,setNumero] = useState("")    
    const [nombre,setNombre] = useState("")    
    const transactionColectionRef = collection(db,"numeros")
    const handlerMandaData=()=>{
        console.log(`click`);
        AddNumeros({
            numero,
            nombre
        })
    }
    useEffect(()=>{
        
    },[])
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
    </>
  )
}

export default Rifas