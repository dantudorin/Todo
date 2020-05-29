import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Task.css';
import { Card, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Task = (props) => {

    const [renameState, setRenameState] = useState(false);
    const [renamedState, setRenamedState] = useState(false);

    useEffect(() => {}, [renamedState]);

    const formik = useFormik({
        initialValues: {
            newTask: props.task.objective,
        },
        validationSchema: Yup.object({
            newTask: Yup.string()
                .min(15, 'Must be 15 characters or less')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            props.changeObjective({ id: props.task.id, objective: values.newTask, done: props.task.done });
            setRenamedState(!renamedState);
        },
    });

    const renderRename = () => {
        return (
            <form onSubmit={formik.handleSubmit}>
                <textarea
                    className='TextArea'
                    name="newTask"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newTask}
                />
                {formik.touched.newTask && formik.errors.newTask ? (
                    <div style={{ color: 'red' }}>{formik.errors.newTask}</div>
                ) : null}
                <Button className='CustomButton' onClick={rename} variant="danger">CANCEL</Button>
                <Button className='CustomButton' type="submit" variant="success" disabled={formik.touched.newTask && formik.errors.newTask ? true : false}>CONFIRM</Button>
            </form>
        );
    }

    const confirmRename = () => {
        console.log('Confirmed.');
    }

    const rename = () => {
        setRenameState(!renameState);
    }

    const defaultRender = () => {
        let renameBtn = props.task.done ? null : <Button className='CustomButton' onClick={rename} variant="outline-dark">Rename</Button>;

        return (
            <div>
                <Card.Text>
                    {props.task.objective}
                </Card.Text>
                <Button className='CustomButton' variant="outline-dark"
                    onClick={props.task.done ? null : () => { props.changeDoneState(props.task.id) }}
                    disabled={props.task.done ? true : null}>{props.task.done ? "DONE" : "NOT DONE"}
                </Button>
                {renameBtn}
            </div>
        );
    }

    return (
        <Card className="CardColumn" style={{
            width: '18rem',
            display: 'block',
            border: props.task.done ? '2px solid green' : null,
            background: props.task.done ? 'rgba(242, 177, 13, 0.07)' : null
        }} >
            <Card.Header>Normal</Card.Header>
            {renameState ? renderRename() : defaultRender()}

        </Card>
    );
}

export default Task;