import Grid from '@mui/material/Grid'
import { TurnedInNot } from "@mui/icons-material"
import { Box, Drawer, Toolbar, Divider, List, ListItem, ListItemButton,ListItemIcon, ListItemText } from "@mui/material"
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'


export const SideBar = ({drawerWidth = 240}) => {

  const {displayName} = useSelector(state=>state.auth)

  return (
    <Box 
        component='nav'
        sx={{
            width: { sm: drawerWidth },flexShrink:{sm:0}
        }}
    >
        <Drawer 
            variant="permanent"
            sx={{
                display:{ sm: 'block',xs:'none' },
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth }
            }} 
        >
          <Toolbar>
            <Typography variant="h6" noWrap component='div'> {displayName} </Typography>
          </Toolbar>
          <Divider/>
          <List>
            {
                ['Enero','Febrero','Marzo'].map(mes=>(
                    <ListItem key={mes} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                            </ListItemIcon>
                            <Grid 
                                container
                                direction='column'
                            >
                              <ListItemText primary={mes} />
                              <ListItemText secondary={'No termina mas'} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
          </List>
        </Drawer>
    </Box>
  )
}
