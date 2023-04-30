import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
const NavIcons = () => {
    return ( 
        <>
        <IconButton aria-label="account">
         <AccountCircleIcon />
        </IconButton>
        <IconButton aria-label="dark">
         <DarkModeIcon />
        </IconButton>
        <IconButton aria-label="light">
         <LightModeIcon />
        </IconButton>
        <IconButton aria-label="notification">
         <NotificationsIcon/>
        </IconButton>
        </>
     );
}
 
export default NavIcons;