import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
    const navListStatic =[
        {id:1, title:'Homepage', path:'/'},
        {id:2, title:'Boxes', path:'boxes'},
        {id:3, title:'Graphic Designe', path:'others'},
    ]
    return ( 
        <>
        <nav className="navBar">
          {navListStatic.map((navitem, idx)=>( 
            <NavLink className="navItem" to={navitem.path} key={idx}>
               {navitem.title}
            </NavLink>
        ))}
        </nav>  
        <main><Outlet/></main>
        </>
     )
}
 
export default NavBar;