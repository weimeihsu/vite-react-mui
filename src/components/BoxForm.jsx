import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

const BoxForm = () => {
    const [type, setAge] = useState('10');

    const handleChange = (e) => {
        setAge(e.target.value);
    };

    return ( 
    <Box sx={{ }}>
        <TextField id="outlined-basic" label="Movie Name" variant="outlined" sx={{mb:2}} />
       {/* select component */}
        <FormControl fullWidth size="small">
        <InputLabel id="select-label">Type</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="success">Add</Button>
    </Box>
     );
}
 
export default BoxForm;