import { onAuthStateChanged } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { firebaseAuth } from "../firebase"
import { login, logout } from "../store/auth"
import { useEffect } from "react"
import { startLoadingNotes } from "../store/journal/thunks"

export const useCheckAuth = () => {
    const {status} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
  
    useEffect(() => {
      onAuthStateChanged(firebaseAuth,async(user)=>{
  
        if(!user) return dispatch( logout({}) )
  
        const {email, displayName, uid, photoURL} = user

        dispatch(login({email, displayName, uid, photoURL}))

        dispatch(startLoadingNotes())
        
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return status
  
}
