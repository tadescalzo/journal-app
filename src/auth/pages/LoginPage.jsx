import {Grid, Typography, TextField, Button, Link, Alert} from '@mui/material'
import {Google} from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import {AuthLayout} from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useSelector, useDispatch } from 'react-redux'
import {startGoogleSignIn, startLoginWithEmailPassword} from '../../store/auth'
import { useMemo, useState } from 'react'



const initialForm = {
  email: '',
  password: ''
}

export const LoginPage = () => {

const [formSubmited, setFormSubmited] = useState(false)
const {status, errorMessage} = useSelector((state)=>state.auth)
const dispatch = useDispatch()

const isAuthenticated = useMemo(()=>status ==='checking',[status])

const {email, password, onInputChange} = useForm(initialForm)

const onSubmit=(event)=>{

  event.preventDefault()

  setFormSubmited(true)

  dispatch(startLoginWithEmailPassword({email,password})) 
}

const onGoogleSignIn=()=>{
  dispatch(startGoogleSignIn()) 
  console.log('google')
}


  return (

    <AuthLayout title='Login'>
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
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
          <Grid container spacing={2} display={!!errorMessage && formSubmited ? '' : 'none'}>
            <Grid item
            xs={12}
            sx={{mt:2}}
            >
              <Alert
              severity='error'>
              {errorMessage}
              </Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{mb:2,mt:1}}>
            <Grid item xs={12} sm={6} >
              <Button disabled={isAuthenticated} type='submit' variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Button disabled={isAuthenticated} onClick={onGoogleSignIn} variant="contained" fullWidth>
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
