import Button from '@mui/material/Button'
import { useState } from 'react'

const ButtonClick = () => {
    const [btnValue, setBtnvalue] = useState('initial value')
    
    const handleClick = (newValue)=>{
        setBtnvalue(newValue)
    }
    return ( 
        <>
        <p>{btnValue}</p>
        <Button variant="contained" onClick={()=>handleClick('new value in btn')}>Click Event</Button>
        </>
     )
}
 
export default ButtonClick;