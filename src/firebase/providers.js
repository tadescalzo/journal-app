import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { firebaseAuth } from './config'


const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async() =>{
try{
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const {displayName, photoURL, email, uid} = result.user
    return{
        ok:true,
        displayName, email, uid, photoURL
    }

}catch(error){
    const errorMessage = error.message;
    return{
        ok:false,
        errorMessage:errorMessage
    }
}
}