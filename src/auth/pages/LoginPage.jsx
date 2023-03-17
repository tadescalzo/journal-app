import {Grid, Typography, TextField, Button, Link} from '@mui/material'
import {Google} from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import {AuthLayout} from '../layout/AuthLayout'







export const LoginPage = () => {
  return (

    <AuthLayout title='Login'>

      <form>
        <Grid container>
          {/* Imputs */}
          <Grid 
            item
            xs={12}
            sx={{mt:2}}
          >
            <TextField
              id="formMail"
              label="Correo"
              placeholder='email'
              type='email'
              fullWidth
              sx={{mb:2}}
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
              placeholder='contraseña'
              type='password'
              fullWidth
            />
          </Grid>
          {/* Login/Google btns */}
          <Grid container spacing={2} sx={{mb:2,mt:1}}>
            <Grid item xs={12} sm={6} >
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Button variant="contained" fullWidth>
                <Google/>
                  <Typography sx={{ml:1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid 
            container 
            direction='row'
            justifyContent='end'
          >
            <Link component={RouterLink} color='inherit' to='/auth/register'>
            Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>


  )
}
