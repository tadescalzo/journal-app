import Grid from '@mui/material/Grid'
import {AppBar,Toolbar, IconButton, Typography} from '@mui/material'
import {LogoutOutlined, MenuOutlined} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogOut } from '../../store/auth'



export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch()

  const logOut = () =>{
    dispatch( startLogOut() )
  }

  return (
    <AppBar 
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${drawerWidth}px` }
        }}
    >
      <Toolbar>
        <IconButton 
        color='inherit'
        edge='start'
        sx={{mr:2, display:{sm:'none'}}}
        >
          <MenuOutlined/>
        </IconButton>
        <Grid 
            container 
            direction='row'
            justifyContent='space-between'
            alignContent='center'
        >
          <Typography mt={0.5} variant='h6' noWrap component='div'>Journal App</Typography>
          <IconButton onClick={logOut} component={Link}  color='error'>
            <LogoutOutlined/>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
