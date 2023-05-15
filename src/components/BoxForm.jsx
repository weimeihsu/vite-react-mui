import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const BoxForm = ({movieLabels, onAddBox, onClose}) => {

    const [movieName, setMovieName] = useState('')
    const [movieLabel, setLabel] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!movieName){
        alert('need name')
        return
      }
      const boxObj={
        title:movieName,
        label:movieLabel,
        id : Math.floor(Math.random() * 100)
      }
      onAddBox(boxObj)

      setMovieName('')
      setLabel('')
    }

    return ( 
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} >
            <FormControl fullWidth size="small">
            <TextField  size="small" label="Movie Name" value={movieName} variant="outlined" onChange={e=>setMovieName(e.target.value)}/>  
            </FormControl>
          
            <FormControl fullWidth size="small">
              <InputLabel id="selected-label">Movie Label</InputLabel>
              <Select
                labelId="selected-label"
                id="simple-select"
                value={movieLabel}
                label="Movie Label"
                onChange={e=>setLabel(e.target.value)}
              >
                {movieLabels.map((item,idx)=>(
                <MenuItem key={idx} value={item.label}>{item.label}</MenuItem>
              ))}
              </Select>
            </FormControl>
          <Stack spacing={2} direction="row">
          <Button variant="outlined" color="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="contained" color="secondary" type='submit'>Add</Button>
          </Stack>
        </Stack>
     
     
      
     
      </form>
        
     );
}
 
export default BoxForm;