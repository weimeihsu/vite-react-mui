import Chip from '@mui/material/Chip'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import { useDispatch } from 'react-redux'
import { deleteBox }  from '../reducers/boxesSlice'

const Boxes = ({id, title, label}) => {
    const dispatch = useDispatch()
    const deletebox = (id)=>{ dispatch(deleteBox({id:id})) } 

    return ( 
        <>
            <Box variant="outlined" className="box" sx={{ p: 2,m:1,backgroundColor: 'primary.dark',
            borderRadius:'4px',
            cursor:'pointer',
            '&:hover': {
                backgroundColor: 'primary.dark',
                opacity: [0.9, 0.8, 0.7],
            },}}>
            <Chip label={label} size="small"/>
            <h3>{title}</h3>
            <DeleteIcon sx={{ fontSize: 16 }} onClick={()=>deletebox(id)}/>
            </Box>   
        </>
     );
}
 
export default Boxes;