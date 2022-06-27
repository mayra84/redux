import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, deleteTask } from '../redux/actions'

function ToDo() {
    const [mode, setMode] = useState('add')
    const [task, setTask] = useState([])
    const dispatch = useDispatch()
    // const tasks = useSelector(state => state.tasks)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask(task))
        setTask('')


    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <input type='text' value={task} onChange={e => setTask(e.target.value)}></input>
                    <button type='submit'>Submit</button>
                </p>
            </form>
        </div>
    )
}

export default ToDo