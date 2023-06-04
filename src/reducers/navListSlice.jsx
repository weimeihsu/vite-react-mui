import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {id:1, title:'Homepage', path:'/'},
  {id:2, title:'Boxes', path:'boxes'},
  {id:3, title:'Graphic Design', path:'graphic-design'}]

const navListSlice = createSlice({
  name: 'navList2',
  initialState,
  reducers: { },
})

export const selectAllnavList = (state) => state.navListState
export default navListSlice.reducer