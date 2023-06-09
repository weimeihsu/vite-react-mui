import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useDispatch } from 'react-redux'
import { addBox } from '../reducers/boxesSlice'

const BoxForm = ({chips}) => {
    // control form popup
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    
    const [movieName, setMovieName] = useState('')
    const [label, setLabel] = useState('')

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
      e.preventDefault()
      if(movieName && label){
        dispatch(
          addBox({title:movieName, label})
          // addBox(movieName,label)
        )
        setMovieName('')
        setLabel('')
        setOpen(false)
      } 
    }

    return ( 
      <>
      <Button onClick={handleOpen} variant="outlined">Add New</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
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
                value={label}
                label="Movie Label"
                onChange={e=>setLabel(e.target.value)}
              >
                {chips.map((item,idx)=>(
                <MenuItem key={idx} value={item.text}>{item.text}</MenuItem>
              ))}
              </Select>
            </FormControl>
          <Stack spacing={2} direction="row">
          <Button variant="outlined" color="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="secondary" type='submit'>Add</Button>
          </Stack>
        </Stack>
      </form>
      </Box>
      </Modal>
      </>
      
     );
}
 
export default BoxForm;