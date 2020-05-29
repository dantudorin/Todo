import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../storage/actionTypes';
import './Tasks.css';
import Task from './Task/Task';

const Tasks = (props) => {

    return (
        <div className="Tasks">
            {!props.tasks ? <div className="Empty">You don't have any tasks yet.</div> : null}
            <div className='container'>
                <div className='row'>
                    {props.tasks ? props.tasks.map(task => {
                        return (
                            <div className='col-sm-12 col-lg-4 '>
                                <Task 
                                key = {task.id} 
                                task = {task} 
                                changeDoneState={props.changeDoneState}
                                changeObjective={props.changeObjective}
                                />
                            </div>
                        );
                    }) : null}
                </div>
            </div>
        </div>
    );
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

const mapStateToProps = (state) => ({ tasks: state.tasks });

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);