import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

const BoxForm = ({movieLabels}) => {

    const [movieLabel, setLabel] = useState('Thriller');

    const handleChange = (e) => {
      setLabel(e.target.value);
    };

    return ( 
         <Box sx={{ }}>
         
        <TextField id="outlined-basic" label="Movie Name" variant="outlined" sx={{mb:2}} />
       {/* select component */}
        <FormControl fullWidth size="small">
        <InputLabel id="selected-label">Movie Label</InputLabel>
        <Select
          labelId="selected-label"
          id="simple-select"
          value={movieLabel}
          label="Movie Label"
          onChange={handleChange}
        >
          {movieLabels.map((item,idx)=>(
          <MenuItem key={idx} value={item}>{item}</MenuItem>
        ))}
        </Select>
      </FormControl>
      
      <Button variant="contained" color="success">Add</Button>
    </Box>   
     );
}
 
export default BoxForm;