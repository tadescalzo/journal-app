import { logOutFromUser, registerUserWithEmailPassword, signInWithEmailPassword, signInWithGoogle } from "../../firebase"
import { checkingCredentials, login, logout } from "./authSlice"


export const startGoogleSignIn= () =>{
    return async(dispatch)=>{

        dispatch(checkingCredentials())

        const { errorMessage,...result} = await signInWithGoogle()
        
        if (!result.ok) return dispatch( logout({errorMessage}) )
        
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) =>{
    return async(dispatch)=>{
        

        const {errorMessage,...result} = await registerUserWithEmailPassword({email, password, displayName})

        if (!result.ok) return dispatch( logout({ errorMessage }) )
        dispatch(checkingCredentials())
        dispatch( login(result) )
        
    }
} 

export const startLoginWithEmailPassword = ({email,password}) =>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())

        const {errorMessage,...result} = await signInWithEmailPassword({email,password})

        if(!result.ok) return dispatch( logout({ errorMessage }) )

        dispatch( login(result) )
    }
}

export const startLogOut = () => {
    return async(dispatch)=>{

        dispatch(checkingCredentials())

        await logOutFromUser()

        dispatch( logout({}) )
    }
}