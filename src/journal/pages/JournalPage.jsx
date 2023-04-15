import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { Fab } from "@mui/material"


export const JournalPage = () => {

  const dispatch = useDispatch()
  const {isSaving, activeNote} = useSelector(state=>state.journal)

  const onClickNewNote = ( ) =>{
    dispatch( startNewNote() )
  }

  return (
    <>
    <JournalLayout>

      {
        (!!activeNote) ? <NoteView /> : <NothingSelectedView />
      }

      <Fab 
        disabled={isSaving}
        size="large"
        sx={{
          color:'white',
          backgroundColor:'error.main',
          transition:'0.2s',
          ':hover' : {backgroundColor:'error.main',opacity: '0.9'},
          position:'fixed',
          right:50,
          bottom:50
        }}
        aria-label="add"
        onClick={onClickNewNote}>
        <AddOutlined sx={{fontSize:30}} />
      </Fab>

    </JournalLayout>
    </>
  )
}
