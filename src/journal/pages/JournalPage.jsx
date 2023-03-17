import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import IconButton from '@mui/material/IconButton'
import { AddOutlined } from "@mui/icons-material"
import { Fab } from "@mui/material"


export const JournalPage = () => {
  return (
    <>
    <JournalLayout>

      {/* <NothingSelectedView /> */}

      <NoteView />

      {/* <IconButton 
        size="large"
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover' : {backgroundColor:'error.main',opacity: '0.7'},
          position:'fixed',
          right:50,
          bottom:50
        }}
      >
        <AddOutlined sx={{fontSize:30}} />
      </IconButton> */}

      <Fab 
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
        aria-label="add">
        <AddOutlined sx={{fontSize:30}} />
      </Fab>

    </JournalLayout>
    </>
  )
}
