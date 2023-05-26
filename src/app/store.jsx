import { configureStore } from '@reduxjs/toolkit'
import navListReducer from '../features/navListSlice'
import boxesReducer from '../features/boxesSlice'

export const store = configureStore({
  reducer: {
    navList: navListReducer,
    boxes:boxesReducer
  },
})