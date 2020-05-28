import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import * as actionType from '../../storage/actionTypes';
import './Tasks.css';

const Tasks = (props) => {

    return (
        <div className="Tasks">
            {!props.tasks ? <div className="Empty">You don't have any tasks yet.</div> : null}
            <div className='container'>
                <div className='row'>
                    {props.tasks.map(task => {
                        return (
                            <div className='col-sm-12 col-lg-4 '>
                                <Card className="CardColumn" style={{
                                    width: '18rem',
                                    display: 'block',
                                    border: task.done ? '1.5px solid green' : null,
                                    background : task.done ? 'rgba(4, 255, 0, 0.14)' : null
                                }} >
                                    <Card.Header>Normal</Card.Header>
                                    <Card.Text>
                                        {task.objective}
                                    </Card.Text>
                                    <Button className='DoneButton' variant="outline-dark"
                                        onClick={task.done ? null : () => { props.changeDoneState(task.id) }}
                                        disabled={task.done ? true : null}>{task.done ? "DONE" : "NOT DONE"}</Button>

                                    {task.done ? null :
                                        <Button className='Rename' variant="outline-dark">Rename</Button>
                                    }
                                </Card>
                            </div>
                        );
                    })}
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
        })
    }
}

const mapStateToProps = (state) => ({ tasks: state.tasks })

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);