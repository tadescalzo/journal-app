import { AuthLayout } from "../layout/AuthLayout"
import Typography from '@mui/material/Typography'
import {Grid, TextField, Button} from '@mui/material'
import { Link, Link as RouterLink } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">

      <form>
        <Grid 
          container
        >
          {/* Imputs */}
          <Grid 
            item
            xs={12}
            sx={{mt:2}}
          >
            <TextField
              id="formName"
              label="Nombre Completo"
              placeholder='Nombre'
              type='text'
              fullWidth
            />
          </Grid>
          <Grid 
            item
            xs={12}
            sx={{mt:2}}
          >
            <TextField
              id="formMail"
              label="Mail"
              placeholder='Mail'
              type='email'
              fullWidth
            />
          </Grid>
          <Grid 
            item
            xs={12}
            sx={{mt:2}}
          >
            <TextField
              id="formPass"
              label="Contraseña"
              placeholder='Contraseña'
              type='password'
              fullWidth
            />
          </Grid>
          {/* Login/Google btns */}
          <Grid container spacing={2} sx={{mb:2,mt:1}}>
            <Grid item 
              xs={12} sm={6} >
              <Button variant="contained" fullWidth>
                Registrar
              </Button>
            </Grid>
            <Grid 
              container 
              xs={12}
              sm={6}
              justifyContent='end'
              alignContent='center'
              sx={{mt:2}}
            >
              <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    
    </AuthLayout>
  )
}
