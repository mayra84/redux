const defaultState = {
    taskArray: [],
}

export function taskReducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                taskArray : [...state.taskArray, action.task]
                }
        case 'DELETE_TASK':
            return {
                taskArray: state.taskArray.filter((todo, i) => {
                return i !== action.index
            })
        }
        default: 
            return state
    }
}
