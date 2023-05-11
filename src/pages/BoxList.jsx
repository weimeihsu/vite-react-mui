import { useState } from "react"
import Stack from '@mui/material/Stack'
import Button from "@mui/material/Button"

import Boxes from '../components/Boxes'
import BoxForm from "../components/BoxForm"


// use state to modify data
const BoxList = () => {
    const [boxes, setBox] = useState([
        {title:'Snow White', label:'Cartoon',id:0},
        {title:'The Secret Garden', label:'Comedy',id:1},
        {title:'Lion King', label:'Drama',id:2},
        {title:'Little Mermaid', label:'Thriller',id:3},
        {title:'Spider man', label:'Action',id:4},
        {title:'What Happened to Wed', label:'Action',id:5},
    ])
    const movieLabels =['Cartoon','Comedy','Drama','Thriller','Action' ]
    const deleteBox = (id) => {
        setBox(boxes.filter(box => box.id !==id))
    }
    return ( 
        <>
        <h1>Boxes CRUD case</h1>
        <BoxForm movieLabels={movieLabels}/>
        <Button variant="contained" color="success">Add New</Button>
        <Stack  direction="row"
                flexWrap="wrap">
        <Boxes boxes={boxes} onDelete={deleteBox}/>    
        </Stack>
        
        </>
     )
}
 
export default BoxList