export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        task:  task
    }
}


export const deleteTask = (index) => {
    return {
        type: 'DELETE_TASK',
        index
    }
}