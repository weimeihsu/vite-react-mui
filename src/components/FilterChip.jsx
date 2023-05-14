import Chip from '@mui/material/Chip'
import { useState } from 'react'

const FilterChip = ({movieLabels, onSelect}) => {

    
    return ( 
        <>
         {movieLabels.map(item=>(
            <Chip sx={{mr:1}} color={item.selected ? "primary" : "default"}  variant={item.selected ? "default" : "outlined"} onClick={()=>onSelect(item)} key={item.label} label={item.label}/>
        ))}
        </>
       
     );
}
 
export default FilterChip;