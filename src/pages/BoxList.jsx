import { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'

import { useSelector, useDispatch} from 'react-redux'
import { selectAllLabels, filterChip, selectAllfilteredChips }  from '../reducers/labelsSlide'
import { selectAllBoxes, fetchBoxes }  from '../reducers/boxesSlice'

import Boxes from '../components/Boxes'
import BoxForm from '../components/BoxForm'
import FilterChip from '../components/FilterChip'

// use state to modify data
const BoxList = () => {
    const dispatch = useDispatch()
    const boxlist = useSelector(selectAllBoxes)
  
    const chipList = useSelector(selectAllLabels)
    const filteredChips = useSelector(selectAllfilteredChips)
    
    const [filteredboxes, setFilteredBoxes] = useState(boxlist)

    const selectedChip = (text)=>{
        dispatch(filterChip({text}))
    }
    useEffect(()=>{dispatch(fetchBoxes())},[])
    useEffect(()=>{filtering()},[filteredChips])
    
    const filtering = () =>{
        if(filteredChips.length>0){
            const tempArray = filteredChips.map(chip=>{
                const obj = boxlist.filter(box=>box.label===chip)
                return obj
            })
            setFilteredBoxes(tempArray.flat())
        }else {setFilteredBoxes([...boxlist])}
    }
    return ( 
        <>
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        ><h1>Boxes CRUD case</h1>
        <BoxForm chips={chipList}/>
        </Stack>
        {chipList.map(chip=><FilterChip key={chip.text} {...chip} onSelectLabel={selectedChip}/>)}
 
        {boxlist.length > 0 ? (
            <Stack direction="row" flexWrap="wrap">
            {filteredboxes.map(box=><Boxes key={box.id} {...box}/>)}
            </Stack>
        ):(<Stack>No data available</Stack>)}
        </>
     )
}
 
export default BoxList