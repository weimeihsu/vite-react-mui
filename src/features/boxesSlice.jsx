import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {title:'Snow White', label:'Cartoon',id:0},
    {title:'The Secret Garden', label:'Comedy',id:1},
    {title:'Lion King', label:'Drama',id:2},
    {title:'Little Mermaid', label:'Thriller',id:3},
    {title:'Spider man', label:'Action',id:4},
    {title:'What Happened to Wed', label:'Action',id:5}]


export const boxesSlice = createSlice({
  name: 'boxes',
  initialState,
  reducers: {
    addBox: (state, action) => {
      state.push(action.payload)
    },

  },
})

// Action creators are generated for each case reducer function
export const { addBox } = boxesSlice.actions
export const selectAllBoxes = (state) => state.boxes
export default boxesSlice.reducer