import Chip from '@mui/material/Chip'

const FilterChip = ({text, selected, onSelectLabel}) => {
    return ( 
        <>
            <Chip sx={{mr:1}} color={selected ? "primary" : "default"}  variant={selected ? "default" : "outlined"} onClick={()=>onSelectLabel(text)} label={text}/>
        </>
       
     );
}
 
export default FilterChip;