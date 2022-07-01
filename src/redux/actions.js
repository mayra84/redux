export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        task
    }
}

export const deleteTask = (index) => {
    return {
        type: 'DELETE_TASK',
        index
    }
}