import {addDoc,collection,serverTimestamp} from "firebase/firestore"
import { db } from "../confic/firebase"
const transactionColectionRef = collection(db,"numeros") 

export const AddNumeros = async ({numero,nombre})=>{
    try {
        await addDoc(transactionColectionRef,{
             numero,
             nombre
        })
    } catch (error) {
        console.error(error);
    }
    return {AddNumeros}
}