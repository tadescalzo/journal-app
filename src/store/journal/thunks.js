import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { firebaseDB } from "../../firebase"
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice"
import { loadNotes } from "../../helpers/loadNotes"
import { fileUploader } from "../../helpers/fileUploader"



export const startNewNote = () =>{
    return async(dispatch, getState)=> {

        dispatch(savingNewNote())

        const {uid} = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
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
        const {activeNote} = getState().journal

        const noteToFirestore = {...activeNote}

        delete noteToFirestore.id

        const docRef = doc(firebaseDB,`${uid}/journal/notes/${activeNote.id}`)

        await setDoc(docRef,noteToFirestore,{merge:true})

        dispatch(updateNote(activeNote))
    }
}

export const startUploadingFiles=(files = [])=>{
    return async(dispatch, getState)=>{
        dispatch( setSaving() )

        const fileUploadPromises = []

        for (const file of files){
            fileUploadPromises.push(fileUploader(file))
        }

        const photosUrls = await Promise.all(fileUploadPromises)
        const {activeNote} = getState().journal
        activeNote.imageUrls.length > 0 ? console.log('no hay nada') : console.log('hay fotos anteriores')
        dispatch( setPhotosToActiveNote(photosUrls) )
    }
}

export const startDeletingNote=()=>{
    return async(dispatch,getState)=>{
        dispatch(setSaving())
        const {uid} = getState().auth;
        const {activeNote} = getState().journal
        const docRef = doc( firebaseDB, `${uid}/journal/notes/${activeNote.id}` )
        const resp = await deleteDoc(docRef)
        dispatch(deleteNoteById(activeNote))
        dispatch(setActiveNote(null))
    }
}