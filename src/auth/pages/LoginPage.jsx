import {Grid, Typography, TextField, Button, Link} from '@mui/material'
import {Google} from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import {AuthLayout} from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useSelector, useDispatch } from 'react-redux'
import {checkingAuth,startGoogleSignIn} from '../../store/auth'




export const LoginPage = () => {

const {status} = useSelector((state)=>state.auth)
const dispatch = useDispatch()

const {email, password, onInputChange,formState} = useForm({
  email: 'nacho@gmail.com',
  password: '123456'
})

const onSubmit=(event)=>{
  event.preventDefault()
  dispatch(checkingAuth()) 
  console.log(formState)
}

const onGoogleSignIn=()=>{
  dispatch(startGoogleSignIn()) 
  console.log('google')
}


  return (

    <AuthLayout title='Login'>

      <form onSubmit={onSubmit}>
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
              name='email'
              value={email}
              onChange={onInputChange}
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
              name='password'
              value={password}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          {/* Login/Google btns */}
          <Grid container spacing={2} sx={{mb:2,mt:1}}>
            <Grid item xs={12} sm={6} >
              <Button type='submit' variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google/>
                  <Typography sx={{ml:1}}>Google</Typography>
              </Button>
              <h1>{status} </h1>
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
