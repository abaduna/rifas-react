import React, { useEffect, useState } from 'react'
import {getDocs,collection} from "firebase/firestore"
import { db } from '../confic/firebase'
    
const MostrarNumeros = () => {
    const [numerosFiltradosState,SetNumerosFiltradosState]= useState([])

    const transactionColectionRef = collection(db, "numeros");
    const verificarNumeros = async () => {

        
          const numeros = Array.from({ length: 100 }, (_, index) => index + 1) // num 1 al 100
          const querySnapshot = await getDocs(transactionColectionRef);
          const data = querySnapshot.docs.map((doc) => doc.data().numero);
          console.log(data); // ['69', '6', '1', '100', '2', '3', '5']
          let numeroData = data.map(str => parseInt(str));
          const numerosFiltrados = numeros.filter(numero => !numeroData.includes(numero));
          console.log(numerosFiltrados); 
          SetNumerosFiltradosState(numerosFiltrados)


          
         
          
      };
    useEffect(()=>{
        verificarNumeros()
    },[])
  return (
    <>
    <h1>Numero disponibles</h1>
    
    <div className="grid">
    {numerosFiltradosState.map((numero) => (
          <li key={numero}>{numero}</li>
        ))}      
    </div   >
    </>
  )
}

export default MostrarNumeros