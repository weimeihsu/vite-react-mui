import {Drawer, Box, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {useState} from 'react'
import StaticList from './StaticList'

const SideDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return ( 
    <>
    <IconButton size='large' onClick={()=>setIsDrawerOpen(true)}>
      <MenuIcon/>
    </IconButton>
     <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}variant='persistent'className='drawer'>
      <Box p={1} width='240px' textAlign='left' role='presentation'>
          <StaticList/>
      </Box>
    </Drawer>
    </>
   )
}
 
export default SideDrawer;