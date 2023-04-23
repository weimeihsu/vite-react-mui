// import { ColorModeContext, useMode } from './theme'
import { AppBar, ThemeProvider } from '@mui/material'
import { darkTheme, CustomTheme } from './components/styles/theme'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import {Drawer, Box, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

import {useState} from 'react'
import StaticList from './components/StaticList'
import styled from '@emotion/styled'


function App() {
  const drawerWidth = 240;
  const StyledAppBar = styled(AppBar,{ shouldForwardProp: (prop) => prop !== 'open' })(({theme, open})=>({
    flexGrow:1,
   
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
  }),
    ...(open &&{
      width: `calc(100% - ${drawerWidth}px)`,
      
      transition: theme.transitions.create(['width', 'margin'],{
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    })
  }))
  
  const StyledDrawer = styled(Drawer,{ shouldForwardProp: (prop) => prop !== 'open' })(({theme})=>({
    '& .MuiDrawer-paper':{
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width',{
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: 0
      })
    }
  }))

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline enableColorScheme/>
        <div className="app">
          
          
          <StyledAppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
              <IconButton color="inherit">
                {/* has a badge here */}
              </IconButton>
            </Toolbar>
          </StyledAppBar>
          <StyledDrawer variant="permanent" open={open} >
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <StaticList/>
          </StyledDrawer>
          <Main open={open}>
          <h1>Vite + React + Mui</h1>

          </Main>
        </div>
    </ThemeProvider>
    </>
  )
}

export default App
