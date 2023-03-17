import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, Typography, TextField } from "@mui/material"
import { ImageGallery } from "../components"


export const NoteView = () => {
  return (
    <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{mb:1}}
    >
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>17 de Marzo, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{p:2}}>
              <SaveOutlined/>
              Guardar
            </Button>
        </Grid>
        <Grid container >
          <TextField
            type='text'
            variant="filled"
            fullWidth
            placeholder="Ingrese un titulo"
            label='Titulo'
            sx={{border:'none', mb:1}}
          />
          <TextField
            type='text'
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Que sucedio hoy?"
            minRows={5}
          />
        </Grid>
        <ImageGallery />
    </Grid>
  )
}
