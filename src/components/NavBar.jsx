import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectAllnavList }  from '../features/navListSlice'

const NavBar = () => {
    const navList = useSelector(selectAllnavList)
    
    return ( 
        <>
        <nav className="navBar">
          {navList.map((navitem, idx)=>( 
            <NavLink className="navItem" to={navitem.path} key={idx}>
               {navitem.title}
            </NavLink>
        ))}
        </nav>  
        </>
     )
}
 
export default NavBar;