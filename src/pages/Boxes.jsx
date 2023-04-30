import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';

// use state to modify data
const Boxes = () => {
    const [boxes, setBoxValue] =useState([
        {id:1, title:'React', href:'#'},
        {id:2, title:'Demo', href:'#'},
        {id:3, title:'Vue', href:'#'},
    ])
    return ( 
        <>
        <h1>Boxes CRUD case</h1>
        <div className="boxContainer">
            useState list the value can be reactively changed
            {boxes.map((boxItem, idx)=>(
                <div className="box" key={idx}>
                <a className="card"  href={boxItem.href}>{boxItem.title}</a> 
                <DeleteIcon/>
                </div>     
        ))}
            
        </div>
        </>
     )
}
 
export default Boxes;