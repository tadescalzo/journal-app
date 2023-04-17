import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, Typography, TextField, IconButton } from "@mui/material"
import { ImageGallery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote, startUploadingFiles } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'


export const NoteView = () => {

  const dispatch = useDispatch()

  const {activeNote,savedMessage, isSaving} = useSelector(state=>state.journal)

  const {body,title,date,onInputChange,formState} = useForm(activeNote)

  const dateString = useMemo(()=>{
    const newDate = new Date(date)
    const options ={weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    const formattedDate = newDate.toLocaleDateString("es-AR",options)
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  },[date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState])

  useEffect(() => {
    savedMessage.length > 0 &&
    Swal.fire('Nota Actualizada',savedMessage,'success')
  

  }, [savedMessage])
  

  const onSaveNote = () =>{
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({target}) =>{
    if(target.files === 0) return;

    console.log('subiendo archivos')
    dispatch(startUploadingFiles(target.files));
  }

  const fileInputRef = useRef()
  

  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster'
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{mb:1}}
    >
        <Grid item>
            <Typography fontSize={39} fontWeight='light'> {dateString} </Typography>
        </Grid>
        <Grid container spacing={0 } sx={{width:'fit-content',margin:'8px'}}>
        <IconButton 
          color="primary"
          disabled={isSaving}
          onClick={()=> fileInputRef.current.click()}
          sx={{width:'56px',aspectRatio:1}}
        >
          <UploadOutlined/>
        </IconButton>

        <input 
          type="file" 
          multiple
          onChange={onFileInputChange}
          style={{display:'none'}}
          ref={fileInputRef}
        />
        
  
        <Grid item>
            <Button 
            onClick={onSaveNote}
            disabled={isSaving}
            color='primary' 
            sx={{p:2}}>
              <SaveOutlined/>
              Guardar
            </Button>
        </Grid>
        </Grid>
        

        <Grid container >

          <TextField
            type='text'
            variant="filled"
            fullWidth
            placeholder="Ingrese un titulo"
            label='Titulo'
            name="title"
            value={title}
            onChange={onInputChange}
            sx={{border:'none', mb:1}}
          />
          <TextField
            type='text'
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Que sucedio hoy?"
            name="body"
            value={body}
            onChange={onInputChange}
            minRows={5}
          />

        </Grid>

        <ImageGallery />

    </Grid>
  )
}
