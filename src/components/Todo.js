import React, { useState, useEffect } from 'react'
import './cStyling.css';

export default function Todo() {
    /* var tasks = [
        "wake up at 6'o",
        "eat breakfast",
        "see calender"
    ]; */

    const [tasks, addNewTask] = useState([
        "wake up at 6'o",
        "eat breakfast",
        "see calender"
    ]);

    const addNewTaskHandler = event => {
        event.preventDefault();
        var newTaskText = event.target.taskText.value;
        addNewTask(
            prevTask => prevTask.concat(newTaskText)
        )
        event.target.taskText.value = "";
    };

    return (
        <div className='cStyle'>
            <h2>To Do List App</h2>
            <div>
                <form onSubmit={addNewTaskHandler}>
                    <input name="taskText" />
                    <button>Add new task</button>
                </form>
            </div>
            {
                tasks.map(task => {
                    return <h3>{task}</h3>
                })
            }
        </div>
    )
}
