import { useState } from "react"
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'


import Boxes from '../components/Boxes'
import BoxForm from '../components/BoxForm'
import FilterChip from '../components/FilterChip'


// use state to modify data
const BoxList = () => {
    const [boxes, setBox] = useState([
        {title:'Snow White', label:'Cartoon',id:0},
        {title:'The Secret Garden', label:'Comedy',id:1},
        {title:'Lion King', label:'Drama',id:2},
        {title:'Little Mermaid', label:'Thriller',id:3},
        {title:'Spider man', label:'Action',id:4},
        {title:'What Happened to Wed', label:'Action',id:5},
    ])
    const [popForm, setPopForm] = useState(false)
    const [movieLabels, setMovieLabel] = useState(
        [{label:'All', selected:true},
        {label:'Cartoon', selected:false},
        {label:'Comedy', selected:false},
        {label:'Drama', selected:false},
        {label:'Thriller', selected:false},
        {label:'Action', selected:false}]
    )
 
    const addBox = (boxObj) => {
        setBox([boxObj,...boxes])
    }
    const deleteBox = (id) => {
        setBox(boxes.filter(box => box.id !==id))
    }
    const toggleForm = () =>{
        setPopForm(!popForm)
    }
    const selectedLabel = (label) =>{
        setMovieLabel(movieLabels.map(movieLabel =>{
            if(movieLabel.label === label){
                return{...movieLabel, selected: true}
            }else {
                return movieLabel
            }
        }))
        console.log(label)
        
    }
    return ( 
        <>
        <h1>Boxes CRUD case</h1>
        {/* if popForm is true then show the form. short way for if else */}
        {popForm && <BoxForm movieLabels={movieLabels} onAddBox={addBox} onClose={toggleForm}/>}
        <Button variant="contained" color="secondary" onClick={toggleForm}>Add New</Button>
        <FilterChip movieLabels={movieLabels}  onSelectLabel={selectedLabel}/>
        {boxes.length > 0 ? (
            <Stack  direction="row"
            flexWrap="wrap">
            <Boxes boxes={boxes} onDelete={deleteBox}/>    
            </Stack>
        ):(<Stack>No data available</Stack>)}
        </>
     )
}
 
export default BoxList