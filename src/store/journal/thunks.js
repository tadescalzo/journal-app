import { collection, doc, setDoc } from "firebase/firestore/lite"
import { firebaseDB } from "../../firebase"
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice"
import { loadNotes } from "../../helpers/loadNotes"



export const startNewNote = () =>{
    return async(dispatch, getState)=> {

        dispatch(savingNewNote())

        const {uid} = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc( collection( firebaseDB,`/${uid}/journal/notes` ) )
        const setDocResp =  await setDoc(newDoc,newNote)
        newNote.id = newDoc.id

        dispatch(addNewEmptyNote(newNote))

        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () =>{
    return async(dispatch,getState)=>{

        const {uid} = getState().auth

        if(!uid) throw new Error('El uid del usuario no existe')
    
        const notes = await loadNotes(uid)

        dispatch(setNotes(notes))

    }
}

export const startSaveNote = () =>{
    return async(dispatch, getState)=>{

        dispatch( setSaving() )

        const {uid} = getState().auth
        const {activeNote, savedMessage} = getState().journal

        const noteToFirestore = {...activeNote}

        delete noteToFirestore.id

        const docRef = doc(firebaseDB,`${uid}/journal/notes/${activeNote.id}`)

        await setDoc(docRef,noteToFirestore,{merge:true})

        dispatch(updateNote(activeNote))
    }
}

export const startUploadingFiles=(files = [])=>{
    return async(dispatch)=>{
        dispatch( setSaving() )

        console.log(files)
    }
}