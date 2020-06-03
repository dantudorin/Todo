import * as actionType from './actionTypes';

const initialState = {
    filter : 'No filter',
    tasks: JSON.parse(localStorage.getItem("tasks"))
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.ADD_TODO:

            const task = {
                id : !state.tasks ? 0 : state.tasks.length,
                objective: action.objective,
                importance: action.importance,
                done: false
            }

            if (!state.tasks) {
                let firstTask = [].concat(task);
                localStorage.setItem('tasks', JSON.stringify(firstTask));

                return {
                    filter : state.filter,
                    tasks : firstTask
                }
            }

            let tasks = state.tasks.concat(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            return {
                filter : state.filter,
                tasks : tasks
            }

        case actionType.CHANGE_DONE_STATE : 
            let changedTasks = [].concat(state.tasks);
            changedTasks[action.id].done = ! changedTasks[action.id].done;

            localStorage.setItem('tasks', JSON.stringify(changedTasks));
            return {
                filter : state.filter,
                tasks : changedTasks
            }
        
        case actionType.CHANGE_OBJECTIVE : 
            let changedObjective = [].concat(state.tasks);
            changedObjective[action.task.id].objective = action.task.objective;
               
            localStorage.setItem('tasks', JSON.stringify(changedObjective));
            return {
                filter : state.filter,
                tasks : changedObjective
            }
        
        case actionType.CHANGE_FILTER : 
            return {
                filter : action.filter,
                tasks : [].concat(state.tasks)
            }

        default: return state
    }
}

export default reducer;