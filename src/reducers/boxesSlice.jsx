import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addDoc, collection, getDocs, onSnapshot, doc } from 'firebase/firestore'
import  db  from '../firebase/config'

const initialState = {
  boxes:[{title:'Snow White', label:'Cartoon',id:0},
         {title:'The Secret Garden', label:'Comedy',id:1},
         {title:'Lion King', label:'Drama',id:2},
         {title:'Little Mermaid', label:'Thriller',id:3},
         {title:'Spider man', label:'Action',id:4},
         {title:'What Happened to Wed', label:'Action',id:5}],
} 
export const boxesSlice = createSlice({
  name: 'boxes',
  initialState,
  reducers: {
    addBox: (state, action)=>{
      const {title, label} = action.payload
      // const newItem = {title,label,id}
      // state.boxes = [newItem, ...state.boxes]
      // firebase
      addDoc(collection(db, 'tasks'),{
        title:title,
        label:label,
      })
    },
    // addBox: {
    //   reducer(state, action){
    //     state.boxes.push(action.payload)
    //   },
    //   prepare(movieName,label){
    //     return{
    //       payload:{
    //         title:movieName,
    //         label,
    //         //when the key and params using the same word. can be shorten this way
    //         id: nanoid()
    //       }}
    //   }
    // },
    deleteBox: (state, action)=>{
      const { id } = action.payload
      console.log('delete',id)
      state.boxes = state.boxes.filter(item=>item.id !== id)
    },
    fetchBoxes:(state, action)=>{
      // const querySnapshot = getDocs(collection(db, 'tasks'))
      onSnapshot(collection(db, 'tasks'), querySnapshot=>{
        const tempArray=[]
        querySnapshot.forEach(doc=>{
          const obj = {
            id:doc.id,
            title:doc.data().title,
            label:doc.data().label
          }
          tempArray.push(obj)
        })
        console.log(tempArray)
      })
    }
}
})

// Action creators are generated for each case reducer function
export const { addBox, deleteBox, fetchBoxes} = boxesSlice.actions
export const selectAllBoxes = state => state.boxesState.boxes
export default boxesSlice.reducer