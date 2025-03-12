import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoDelete, todoReset } from "../redux/to-do";
import toast from "react-hot-toast";

const ToDo = () => {
    const todos = useSelector((state) => state.toDo.todos);
    const [searchtodo, setSearchToDo] = useState("");

    const filteredData = todos.filter((todo) =>
      todo.todoTitle.toLowerCase().includes(searchtodo.toLowerCase())
    );
    const dispatch = useDispatch()
    function handleDelete(e) {
      toast.success("To-Do Completed!")
      dispatch(todoDelete(e))
    }
    function handleReset() {
      toast.success("Removed All To-Do's!")
      dispatch(todoReset())
    }

    return (
      <div className="h-screen w-screen overflow-x-hidden p-5 text-green-300 flex flex-col gap-10">
        <h1 className="text-5xl font-bold text-center">To-Do's</h1>

        <div className="flex gap-5 justify-center">
          <input
            type="text"
            value={searchtodo}
            placeholder="Search To-Do's by Title"
            onChange={(e) => setSearchToDo(e.target.value)}
            className="border border-white rounded-3xl h-12 w-[400px] text-green-300 px-5"
          />
          <button className="border border-white text-green-300 rounded-3xl px-5 py-2 cursor-pointer" onClick={handleReset}>
            Reset
          </button>
        </div>


        <div className="flex flex-col items-center gap-5">
          {filteredData.length > 0 ? (
            filteredData.map((ele) => (
              <div
                key={ele._id}
                className="max-w-2xl w-full border-2 border-white rounded-3xl p-5 flex flex-col bg-gray-800 shadow-lg"
              >
                <div className="flex flex-row justify-between items-center">
                  <div className="text-2xl font-semibold text-center">
                    {ele.todoTitle}
                  </div>
                  <div className="place-content-center">
                    {new Date(ele.createdAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' })}
                  </div>
                </div>

     
                <div className="flex justify-between items-center mt-3">
                  <p className="text-gray-300">{ele.todoBody}</p>

                  <div className="flex gap-3">
                    <button className="px-3 py-1 cursor-pointer border rounded-lg hover:bg-blue-950" onClick={()=>handleDelete(ele)}>Done</button>
                    <button className="px-3 py-1 cursor-pointer border rounded-lg bg-amber-50 text-green-800">{ele.todoPriority?ele.todoPriority:"Top Priority"}</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No To-Dos Found</p>
          )}
        </div>
      </div>
    );
};

export default ToDo;
