import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        savedMessage: '',
        notes: [],
        activeNote: null,
        /* active:{
            id: 123,
            title:'',
            body: '',
            date: 1234,
            imageUrls:[] //https://imagen1.jpg,...
        } */
    },
    reducers: {
        addNewEmptyNote: (state,{payload})=>{
            state.title= payload.title;
            state.body = payload.body;
            state.date = payload.date;
        },
        setActiveNote: (state, action) =>{

        },
        setNotes: (state,action) =>{

        },
        setSaving: (state) =>{

        },
        updateNote: (state,action) =>{

        },
        deleteNoteById: (state,action) =>{

        }
    }
});

export const {  
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById, 
} = journalSlice.actions;