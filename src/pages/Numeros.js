import React, { useEffect, useState } from 'react'
import {db} from "../confic/firebase"
import {getDocs,collection,doc,deleteDoc} from "firebase/firestore"
import { Button, Col, Container } from 'react-bootstrap';

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
const deledNumero =async(id)=>{
    await deleteDoc(doc(db, "numeros", id));
    conseguirNumero()
}
  return (
    <>
    <h3>Hola</h3>
    <div className="grid">
    {numero?.map((num, index) => (
        <div className="grid-item" key={num.id}>
          <h2>{num.nombre}</h2>
          <span>El numero es {num.numero}</span>
          <Button onClick={()=>deledNumero(num.id)}>Eliminar</Button>
        </div>
      ))}        
    </div   >

    </>
  )
}

export default Numeros