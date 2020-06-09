import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../storage/actionTypes';
import './Tasks.css';
import Task from './Task/Task';

const Tasks = (props) => {
    if (props.tasks) {
        const filteredTasks = props.tasks.filter(task => task.importance === props.filter || props.filter === 'No filter');
        
        if(filteredTasks.length === 0) {
            return  <div className="Empty">You don't have any tasks yet.</div>
        }
        return filteredTasks.map(task => {
                                return (
                                    <div key = {task.id} className='col-sm-12 col-lg-4 '>
                                        <Task  
                                        task = {task} 
                                        changeDoneState={props.changeDoneState}
                                        changeObjective={props.changeObjective}
                                        />
                                    </div>
                                )})
    }else {
        return <div className="Empty">You don't have any tasks yet.</div>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeDoneState: (id) => dispatch({
            type: actionType.CHANGE_DONE_STATE,
            id: id
        }),
        
        changeObjective: (task) => dispatch({
            type : actionType.CHANGE_OBJECTIVE,
            task : task
        })
    }
}

const mapStateToProps = (state) => (
    { 
        tasks: state.tasks,
        filter: state.filter 
    });

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);