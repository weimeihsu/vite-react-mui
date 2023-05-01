import { useState } from "react"
import Stack from '@mui/material/Stack'
import Button from "@mui/material/Button"

import Boxes from '../components/Boxes'
import BoxForm from "../components/BoxForm"


// use state to modify data
const BoxList = () => {
    const [boxes, setBox] =useState([
        {title:'Snow White', type:'Cartoon',id:0},
        {title:'The Secret Garden', type:'Comedy',id:1},
        {title:'Lion King', type:'Drama',id:2},
        {title:'Little Mermaid', type:'Thriller',id:3},
        {title:'Spider man', type:'Action',id:4},
        {title:'What Happened to Wed', type:'Action',id:5},
    ])

    const deleteBox = (id) => {
        setBox(boxes.filter(box => box.id !==id))
    }
    return ( 
        <>
        <h1>Boxes CRUD case</h1>
        <BoxForm/>
        <Button variant="contained" color="success">Add New</Button>
        <Stack  direction="row"
                flexWrap="wrap">
        <Boxes boxes={boxes} onDelete={deleteBox}/>    
        </Stack>
        </>
     )
}
 
export default BoxList