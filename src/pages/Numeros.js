import React from 'react'
import {db} from "../confic/firebase"
import {collection} from "firebase/firestore"

function Numeros() {
    var numerosRef = db.collection("numeros");
    numerosRef.get().then((snapshot) => {
        // Recorrer cada documento de la instantánea
        snapshot.forEach((doc) => {
          // Imprimir el id y los datos del documento
          console.log(doc.id, " => ", doc.data());
        });
      });
  return (
    <div>Numeros</div>
  )
}

export default Numeros