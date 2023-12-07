import React, { useEffect, useState } from 'react'
import {getDocs,collection} from "firebase/firestore"
import { db } from '../confic/firebase'
    const numeros = Array.from({ length: 100 }, (_, index) => index + 1)
const MostrarNumeros = () => {
    const [numerosFiltradosState,SetNumerosFiltradosState]= useState([])

    const transactionColectionRef = collection(db, "numeros");
    const verificarNumeros = async () => {
        try {
        
         
          const querySnapshot = await getDocs(transactionColectionRef);
          const data = querySnapshot.docs.map((doc) => doc.data().numero);
          console.log(data);
            if (data.length != 0) {
                console.log(`if`);
               const numerosFiltrados = numeros.filter((element) => !data.includes(element)); 
               console.log(numerosFiltrados);
               // Actualizar el estado después de obtener los datos
               SetNumerosFiltradosState(numerosFiltrados);
            }
          // Filtrar los elementos de 'numeros' que no están en 'data'
          
    
          
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      };
    useEffect(()=>{
        verificarNumeros()
    },[])
  return (
    <>
    <div className="grid">
    {numerosFiltradosState.map((numero) => (
          <li key={numero}>{numero}</li>
        ))}      
    </div   >
    </>
  )
}

export default MostrarNumeros