import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip'

// use state to modify data
const Boxes = () => {
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
            {boxes.map((boxItem, idx)=>(
                <Box variant="outlined" className="box" key={idx} sx={{ p: 2,m:1,backgroundColor: 'primary.dark',
                borderRadius:'4px',
                cursor:'pointer',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  opacity: [0.9, 0.8, 0.7],
                },}}>
                <Chip label={boxItem.type} size="small"/>
                <h3>{boxItem.title}</h3> 
                
                <DeleteIcon sx={{ fontSize: 16 }}/>
                </Box>   
        ))}
        </Stack>    
        </>
     )
}
 
export default Boxes;