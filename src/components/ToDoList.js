import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../redux/actions'

function ToDoList() {
    const tasks =  useSelector(state => state.toDoArray)
    const dispatch = useDispatch()
    
    const handleDelete = (index) => {
        dispatch(deleteTask(index))
    }
  return (
    <div>
        {tasks.map((task, i) => {
            return <div key={i}>{task}
            <button onClick={() => handleDelete(i)}>delete</button></div>
        })}
    </div>
  )
}

export default ToDoList