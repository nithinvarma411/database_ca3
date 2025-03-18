// src/components/TaskForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function TaskForm() {
    const [task,setTask] = useState('');
    const [desc, setDesc] = useState('');
    const addData = async () => {
        try {
            const response = await axios.post("http://localhost:5000/tasks", {title: task,description: desc})

            console.log(response);
            
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            {/* Task form */}
            <div>
                <input type="text" placeholder='add title' value={task} onChange={(e) => setTask(e.target.value)}/>
                <input type="text" placeholder='add description' value={desc} onChange={(e) => setDesc(e.target.value)}/>
                <button onClick={addData}>add task</button>
            </div>
        </>
    );
}

export default TaskForm;
