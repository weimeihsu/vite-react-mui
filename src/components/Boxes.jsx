import { useState } from "react"

const Boxes = () => {
    const [boxes, setBoxValue] =useState([
        {id:1, title:'React', href:'#'},
        {id:2, title:'Demo', href:'#'},
        {id:3, title:'Vue', href:'#'},
    ])
    return ( 
        <>
        <h1>Boxes CRUD case</h1>
        <nav className="boxContainer">
            useState list the value can be reactively changed
            {boxes.map((boxItem, idx)=>(
            <a className="card" key={idx} href={boxItem.href}>
               {boxItem.title}
            </a>
        ))}
        </nav>
        </>
     )
}
 
export default Boxes;