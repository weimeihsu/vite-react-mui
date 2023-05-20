import Chip from '@mui/material/Chip'


const FilterChip = ({movieLabels, onSelectLabel}) => {
  
    return ( 
        <>
         {movieLabels.map(item=>(
            <Chip sx={{mr:1}} color={item.selected ? "primary" : "default"}  variant={item.selected ? "default" : "outlined"} onClick={()=>onSelectLabel(item.label)} key={item.label} label={item.label}/>
        ))}
        </>
       
     );
}
 
export default FilterChip;