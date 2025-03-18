
// src/components/TaskList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [task, setTask] = useState([]);

    useEffect(() => {
        const getList = async (e) =>{
            try {
                const response = await axios.get("http://localhost:5000/tasks")
                setTask(response.data)
                console.log(task)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        getList()
    }, [])
    return (
        <>
            {/* Task list */}
            {
                task.map((e) => (
                    <div>
                        <p>title:--- <b>{e.title}</b></p>
                        <p>description:--- <b>{e.description}</b></p>
                        <button>delete</button>
                        <hr />
                    </div>
                ))
            }
        </>
    );
}

export default TaskList;
