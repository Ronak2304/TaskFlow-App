import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoCreate } from "../redux/to-do";
import toast from "react-hot-toast";
import { FaAngleDown } from "react-icons/fa";

const Home = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const options = ["Top Priority", "Will Do It Later", "Last Moment Task"]
    const [priority,setPriority] = useState('')
    const [toggle, isToggle] = useState(false)

    function handleSubmit() {
        if (title.trim() === "") {
            toast.error('Kindly add a Title!');
            return;
        }
        const todo = {
        todoTitle: title,
        todoBody: content,
        _id: Date.now().toString(16),
        createdAt: new Date().toISOString(),
        todoPriority:priority
        };

        toast.success('To-Do Added!');
        dispatch(todoCreate(todo));
        setTitle("");
        setContent("");
    }

    return (
        <div className="h-screen w-screen overflow-x-hidden bg-gray-900 text-white">
        <h1 className="text-5xl p-5 text-green-300 underline flex items-center justify-center">
            Welcome to To-Do App
        </h1>

        <div className="max-w-4xl mx-auto p-5">
            <div className="flex flex-col gap-10">
            <h1 className="text-3xl text-green-300">Write Your To-Do's Here</h1>

            <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                <input
                    type="text"
                    value={title}
                    placeholder="Enter Your To-Do's Title"
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-white rounded-3xl h-12 w-[400px] text-green-300 px-4 bg-transparent"
                />

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="border border-white text-green-300 rounded-3xl px-5 py-2 cursor-pointer "
                >
                    Add
                </button>
                </div>
                <div className="flex flex-row gap-10">
                    <textarea
                    placeholder="Enter Your To-Do's Body"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border border-white rounded-3xl h-64 w-2/3 text-green-300 px-4 py-2 bg-transparent outline-none"
                    />
                    <div className="flex flex-col gap-5">
                        <div className="border border-white rounded-3xl px-5 py-2 place-content-between cursor-pointer flex flex-row items-center" onClick={()=>isToggle(!toggle)}>
                            <h1 className="text-green-300">
                                Set Priority
                            </h1>
                            <FaAngleDown/>
                        </div>
                        <div style={{opacity: toggle? 1:0}} className="flex flex-col gap-1">
                            {options.map((op)=>(
                                <div className={`border text-green-300 border-white rounded-3xl px-5 py-2 cursor-pointer hover:bg-cyan-950 ${priority==op?"bg-cyan-950":"transparent"}`} onClick={()=> {setPriority(op)
                                    console.log(priority)
                                }}>
                                    {op}
                                </div>
                                )
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Home;
