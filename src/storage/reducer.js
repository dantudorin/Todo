import * as actionType from './actionTypes';

const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks"))
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.ADD_TODO:

            const task = {
                objective: action.objective,
                done: false
            }

            if (!state.tasks) {
                console.log(state.tasks)
                console.log('aici');
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


        default: return state
    }
}

export default reducer;