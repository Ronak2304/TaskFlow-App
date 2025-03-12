import { createSlice } from '@reduxjs/toolkit'

/*
    Dfference between JSON.stringify() and JSON.parse()
    JSON.stringify() -> it converts javascript object to JSON format 
                        for eg -> [Defining a js object]
                        const obj = {name:"Ronak",age:19}// This is a js object and now if i run JSON.stringify on this then 
                        const jsonifyobj = JSON.stringify(obj)
                        output->'{"name":Ronak,"age":19}'

    JSON.parse() -> it converts JSON format strings to Javascript objects 
                        for eg -> same string as above
                        const jsonifyobj = JSON.stringify(obj)
                        now if i run JSON.parse then it will convert this into normal js object 
                        const obj = JSON.parse(jsonifystring)
                        output -> {name:"Ronak",age:19}
*/

const initialState = {
  todos: (() =>{
    const storedToDos = localStorage.getItem('todos')
    return storedToDos ? JSON.parse(storedToDos)
 : []  })()
}

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    todoCreate: (state,action) => {
      const todo = action.payload
      state.todos.push(todo)
      localStorage.setItem('todos',JSON.stringify(state.todos))
    },
    todoDelete: (state, action) => {
      const todo = action.payload
      const index = state.todos.findIndex((item)=>item._id===todo._id)

      if(index!=-1){
        state.todos.splice(index,1)
        localStorage.setItem('todos',JSON.stringify(state.todos))
      }
    },
    todoReset: (state) => {
      state.todos = []
      localStorage.removeItem('todos')
    },
  },
})


export const { todoCreate, todoUpdate, todoReset, todoDelete } =  toDoSlice.actions

export default toDoSlice.reducer