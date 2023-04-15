import { collection, getDocs } from "firebase/firestore/lite"
import { firebaseDB } from "../firebase"

export const loadNotes = async(uid = '') =>{
    if(!uid) throw new Error('El uid del usuario no existe')

    const collectionRef = collection(firebaseDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef);
    const notes = []
    docs.forEach(document => {
        notes.push({
            id: document.id,
            ...document.data()
        })
    })
    return notes
}
