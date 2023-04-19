const StaticList = () => {
    const navListStatic =[
        {id:1, title:'React', href:'#'},
        {id:2, title:'Demo', href:'#'},
        {id:3, title:'Vue', href:'#'},
    ]
    return ( 
        <>
        <h1>SideBar</h1>
        <nav className="navBar">
            Static list
            {navListStatic.map((navitem, idx)=>(
            <li className="navItem" key={idx} href={navitem.href}>
               {navitem.title}
            </li>
        ))}
        </nav>
        </>
     )
}
 
export default StaticList;