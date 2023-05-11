import Chip from '@mui/material/Chip'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'

const Boxes = ({boxes, onDelete}) => {

    return ( 
        <>
        {boxes.map(boxItem=>(
            <Box variant="outlined" className="box" key={boxItem.id} sx={{ p: 2,m:1,backgroundColor: 'primary.dark',
            borderRadius:'4px',
            cursor:'pointer',
            '&:hover': {
                backgroundColor: 'primary.dark',
                opacity: [0.9, 0.8, 0.7],
            },}}>
            <Chip label={boxItem.label} size="small"/>
            <h3>{boxItem.title}</h3> 
            
            <DeleteIcon sx={{ fontSize: 16 }} onClick={()=>onDelete(boxItem.id)}/>
            </Box>   
        ))}
        
        </>
     );
}
 
export default Boxes;