import { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'

import { useSelector, useDispatch} from 'react-redux'
import { selectAllLabels, filterChip, selectAllfilteredChips }  from '../reducers/labelsSlide'
import { selectAllBoxes }  from '../reducers/boxesSlice'
import { collection, onSnapshot } from 'firebase/firestore'
import  db  from '../firebase/config'

import Boxes from '../components/Boxes'
import BoxForm from '../components/BoxForm'
import FilterChip from '../components/FilterChip'

// use state to modify data
const BoxList = () => {
    const dispatch = useDispatch()
    const boxlist = useSelector(selectAllBoxes)
  
    const chipList = useSelector(selectAllLabels)
    const filteredChips = useSelector(selectAllfilteredChips)
    
    const [filteredBoxes, setFilteredBoxes] = useState(boxlist)

    const selectedChip = (text)=>{
        dispatch(filterChip({text}))
    }
    const [boxList, setBoxList] = useState([])
    useEffect(()=>{
        onSnapshot(collection(db, 'tasks'), querySnapshot=>{
            setBoxList(querySnapshot.docs.map(doc=>doc.data()))
        })
    },[])

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
        <Stack direction="row" flexWrap="wrap">
            {boxList.map(box=><Boxes key={box.id} {...box}/>
            )}
        </Stack>
        
        {boxlist.length > 0 ? (
            <Stack direction="row" flexWrap="wrap">
            {filteredBoxes.map(box=><Boxes key={box.id} {...box}/>)}
            </Stack>
        ):(<Stack>No data available</Stack>)}
        </>
     )
}
 
export default BoxList