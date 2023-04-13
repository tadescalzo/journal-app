import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
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

export const registerUserWithEmailPassword= async({displayName,email,password})=>{
try {
    const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    const {uid, photoURL} = resp.user

    await updateProfile(firebaseAuth.currentUser,{
        displayName
    });

    return{
        ok: true,
        displayName,email,uid, photoURL
    }

} catch (error) {
    const errorMessage = error.message;
    return{
        ok:false,
        errorMessage:errorMessage
    }
}
}

export const signInWithEmailPassword = async({email, password}) =>{
    try {
        const resp = await signInWithEmailAndPassword(firebaseAuth,email,password)
        const {displayName,uid, photoURL} = resp.user
        return{
            ok:true,
            displayName,email,uid, photoURL
        }

    } catch (error) {
        const errorMessage = error.message;
        return{
            ok:false,
            errorMessage:errorMessage
        }
    }
}