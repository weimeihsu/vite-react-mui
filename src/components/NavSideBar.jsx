import {Drawer, Box, Typography, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {useState} from 'react'

const NavSideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return ( 
    <>
    <IconButton size='large' onClick={()=>setIsDrawerOpen(true)}>
      <MenuIcon/>
    </IconButton>
     <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
      <Box p={2} width='240px' textAlign='center' role='presentation'>
        <Typography variant='h6' component='div'>
          Side panel
        </Typography>
      </Box>
    </Drawer>
    </>
   )
}
 
export default NavSideBar;