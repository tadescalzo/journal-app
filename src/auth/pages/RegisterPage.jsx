import { AuthLayout } from "../layout/AuthLayout"
import Typography from '@mui/material/Typography'
import {Grid, TextField,Link, Button} from '@mui/material'
import {  Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email:[(value)=> value.includes('@'),'El correo debe tener un @.'],
  password:[(value)=>value.length >= 6,'El password debe tener al menos 6 letras.'],
  displayName:[(value)=>value.length >= 1,'El nombre es obligatorio.']
}

export const RegisterPage = () => {

  const {formState,displayName,email, password, onInputChange, 
        isFormValid,emailValid,displayNameValid,passwordValid
  } = useForm(formData, formValidations)


  const onSubmit =(event)=>{
    event.preventDefault()
  }

  return (
    <AuthLayout title="Register">

      <form onSubmit={onSubmit}>
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
              name="displayName"
              value={displayName}
              onChange={onInputChange}
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
              name="email"
              value={email}
              onChange={onInputChange}
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
              name="password"
              value={password}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          {/* Login/Google btns */}
          <Grid container spacing={2} sx={{mb:2,mt:1}}>
            <Grid item 
              xs={12} sm={6} >
              <Button type="submit" variant="contained" fullWidth>
                Registrar
              </Button>
            </Grid>
            <Grid 
              container 
              justifyContent='end'
              alignContent='center'
              sx={{mt:2, width:'50%'}}
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
