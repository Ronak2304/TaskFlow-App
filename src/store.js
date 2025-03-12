import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './redux/to-do'

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
})