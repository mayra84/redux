const defaultState = {
    toDoArray: [],
}

export function taskReducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                toDoArray : [...state.toDoArray, action.task]
                }
        case 'DELETE_TASK':
            return {
                toDoArray: state.toDoArray.filter((todo, i) => {
                return i !== action.index
            })
        }
        default: 
            return state
    }
}
