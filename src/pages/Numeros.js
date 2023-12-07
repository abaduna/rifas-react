import React, { useEffect, useState } from 'react'
import {db} from "../confic/firebase"
import {getDocs,collection} from "firebase/firestore"

function Numeros() {

    const [numero,SetNumero] = useState([])
    const moviesCollectionRef = collection(db, "numeros");
    const conseguirNumero =async()=>{
    try {
        const data = await getDocs(moviesCollectionRef);

        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id:doc.id
        }));
        SetNumero(filteredData);
        console.log(numero);
    } catch (error) {
        
    }        
    }
useEffect(()=>{
    conseguirNumero()
},[])
  return (
    <>
    <h3>Hola</h3>
    {numero?.map((num)=>(<div>
         <h2>{num.nombre}</h2>
        <span>El numero es {num.numero}</span>
    </div>
       
    ))}
    </>
  )
}

export default Numeros