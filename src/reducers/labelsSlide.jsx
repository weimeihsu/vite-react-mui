import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    labels:[{text:'Cartoon', selected:false},
            {text:'Comedy', selected:false},
            {text:'Drama', selected:false},
            {text:'Thriller', selected:false},
            {text:'Action', selected:false}],
    filteredChips:[]
} 

export const labelsSlice = createSlice({
    name:'labels',
    initialState,
    reducers:{
        filterChip:(state, action)=>{
            const { text } = action.payload
            const toggleChip = state.labels.find(item=>item.text === text)
            toggleChip.selected = !toggleChip.selected

            if(state.filteredChips.includes(text)){
                console.log(text)
                state.filteredChips=state.filteredChips.filter(chip => chip !== text)
            }else{state.filteredChips.push(text)}
        },
    }
}) 
// (labelList.map(movieLabel => movieLabel.label === selectedTab ? {...movieLabel, selected:!movieLabel.selected} : movieLabel))
export const selectAllLabels = state => state.labelsState.labels
export const selectAllfilteredChips = state => state.labelsState.filteredChips
export const { filterChip } = labelsSlice.actions
export default labelsSlice.reducer