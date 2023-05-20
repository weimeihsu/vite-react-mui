import { useEffect, useState } from 'react'
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
    const [filteredboxes, setFilteredBoxes] = useState(boxes)
    const [selectedFilters, setSelectedFilters] = useState([])
    const [movieLabels, setMovieLabel] = useState(
        [ {label:'Cartoon', selected:false},
        {label:'Comedy', selected:false},
        {label:'Drama', selected:false},
        {label:'Thriller', selected:false},
        {label:'Action', selected:false}]
    )
    const addBox = (obj) => {
        setBox([obj,...boxes])
    }
    
    const deleteBox = (id) => {
        setBox(boxes.filter(box => box.id !==id))
    }
    // single selection of movie label
    const selectedLabel = () =>{
        setMovieLabel(movieLabels.map(movieLabel =>{
            if(movieLabel.label === label){
                return{...movieLabel, selected: true}
            }else {
                return {...movieLabel, selected: false}
            }
        }))
        console.log(label)
    }
    const toggleLabel = (selectedTab)=>{
        console.log(selectedTab)
        setMovieLabel(movieLabels.map(movieLabel => movieLabel.label === selectedTab ? {...movieLabel, selected:!movieLabel.selected} : movieLabel))
        if(selectedFilters.includes(selectedTab)){
            setSelectedFilters(selectedFilters.filter(tab => tab !== selectedTab))
            
        }else{setSelectedFilters([...selectedFilters, selectedTab])}
        
    }
    useEffect(()=>{filterItems()},[selectedFilters,boxes])

    const filterItems = () =>{
        if(selectedFilters.length>0){
            const tempArray = selectedFilters.map(selectedTab=>{
                const temp = boxes.filter(box=>box.label===selectedTab)
                return temp
            })
            setFilteredBoxes(tempArray.flat())
        }else {setFilteredBoxes([...boxes])}
    }
    
    return ( 
        <>
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        ><h1>Boxes CRUD case</h1>
        <BoxForm movieLabels={movieLabels} onAddBox={addBox}/>
        </Stack>
        
        <FilterChip movieLabels={movieLabels} onSelectLabel={toggleLabel}/>

        {boxes.length > 0 ? (
            <Stack  direction="row"
            flexWrap="wrap">
            <Boxes boxes={filteredboxes} onDelete={deleteBox}/>    
            </Stack>
        ):(<Stack>No data available</Stack>)}
        </>
     )
}
 
export default BoxList