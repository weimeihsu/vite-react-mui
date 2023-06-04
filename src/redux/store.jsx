import { configureStore } from '@reduxjs/toolkit'
import navListSlice from '../reducers/navListSlice'
import boxesSlice from '../reducers/boxesSlice'
import labelsSlide from '../reducers/labelsSlide'

export const store = configureStore({
  reducer: {
    navListState: navListSlice,
    boxesState:boxesSlice,
    labelsState: labelsSlide
  },
})