import * as actionType from './actionTypes';

const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks"))
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.ADD_TODO:

            const task = {
                id : !state.tasks ? 0 : state.tasks.length,
                objective: action.objective,
                done: false
            }

            if (!state.tasks) {
                let firstTask = [].concat(task);
                localStorage.setItem('tasks', JSON.stringify(firstTask));

                return {
                    tasks : firstTask
                }
            }

            let tasks = state.tasks.concat(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            return {
                tasks : tasks
            }

        case actionType.CHANGE_DONE_STATE : 
            let changedTasks = [].concat(state.tasks);
            changedTasks[action.id].done = ! changedTasks[action.id].done;

            localStorage.setItem('tasks', JSON.stringify(changedTasks));
            return {
                tasks : changedTasks
            }
        
        case actionType.CHANGE_OBJECTIVE : 
            let changedObjective = [].concat(state.tasks);
            changedObjective[action.task.id].objective = action.task.objective;
               
            localStorage.setItem('tasks', JSON.stringify(changedObjective));
            return {
                tasks : changedObjective
            }

        default: return state
    }
}

export default reducer;