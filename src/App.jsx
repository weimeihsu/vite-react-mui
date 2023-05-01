// import { ColorModeContext, useMode } from './theme'
import { AppBar, ThemeProvider } from '@mui/material'
import { customedPalette } from './components/styles/theme'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import {Drawer, Box, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import styled from '@emotion/styled'

import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import BoxList from './pages/BoxList'
import HomePagae from './pages/HomePage'
import NavIcons from './components/NavIcon'


function App() {
  const drawerWidth = 240

  const StyledAppBar = styled(AppBar,{ shouldForwardProp: (prop) => prop !== 'open' })(({theme, open})=>({
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
  }),
    ...(open &&{
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
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

  const StyledMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
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
  )

  const Header = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }))
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  return (
    <>
    <ThemeProvider theme={customedPalette}>
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
                  mr:2,
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
                Site Name
              </Typography>
              <NavIcons/>
            </Toolbar>
          </StyledAppBar>
          <StyledDrawer variant="permanent" open={open} anchor="left">
            <Toolbar
              sx={{
                width:drawerWidth,
                flexShrink:0,
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
            
            <NavBar/>

          </StyledDrawer>
          <StyledMain open={open}>
            <Header/> 
             {/* outlet will replace the routes */}
            <Routes>
              <Route index element={<HomePagae/> } />
              <Route path="boxes" element={<BoxList/> } />
            </Routes>
          </StyledMain>
        </div>
    </ThemeProvider>
    </>
  )
}

export default App
