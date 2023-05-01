import { useState } from "react"
import Stack from '@mui/material/Stack'

import Boxes from '../components/Boxes'

// use state to modify data
const BoxList = () => {
    const [boxes, setBoxValue] =useState([
        {title:'Snow White', type:'Cartoon'},
        {title:'The Secret Garden', type:'Comedy'},
        {title:'Lion King', type:'Drama'},
        {title:'Little Mermaid', type:'Thriller'},
        {title:'Spider man', type:'Action'},
        {title:'What Happened to Wed', type:'Action'},
    ])
    return ( 
        <>
        <h1>Boxes CRUD case</h1>
        <Stack  direction="row"
                flexWrap="wrap">
        <Boxes boxes={boxes}/>    
        </Stack>
        </>
     )
}
 
export default BoxList;