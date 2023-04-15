import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        savedMessage: '',
        notes: [],
        activeNote: null,
    },
    reducers: {
        savingNewNote:(state)=>{
            state.isSaving=true;
            state.savedMessage = '';
        },
        addNewEmptyNote: (state,{payload})=>{
            state.notes.push(payload)
            state.isSaving = false;
            /* state.title= payload.title;
            state.body = payload.body;
            state.date = payload.date;
            state.id = payload.id */
        },
        setActiveNote: (state, {payload}) =>{
            state.activeNote = payload;
            state.savedMessage = '';
        },
        setNotes: (state,{payload}) =>{
            state.notes = payload;
            state.savedMessage = '';
        },
        setSaving: (state) =>{
            state.isSaving= true;
            state.savedMessage = '';
        },
        updateNote: (state,{payload}) =>{
            state.isSaving = false;
            state.notes = state.notes.map(note=>{ 
                return note.id === payload.id ? payload : note
            });
            state.savedMessage = `${payload.title}, actualizada correctamente.`;
        },
        deleteNoteById: (state,action) =>{

        }
    }
});

export const {  
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
} = journalSlice.actions;