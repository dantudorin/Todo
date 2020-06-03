import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Task.css';
import { Card, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Task = (props) => {

    const [renameState, setRenameState] = useState(false);

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
            props.changeObjective({ id: props.task.id, objective: values.newTask, done: props.task.done });
            setRenameState(!renameState);
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
                    disabled={props.task.done ? true : null}>Done
                </Button>
                {renameBtn}
            </div>
        );
    }

    const cardheaderImportance = () => {
        switch (props.task.importance) {
            
            case 'Very important' : return ('rgba(255, 221, 0, 1)');
            case 'High' : return ('rgba(255, 119, 0, 1)');
            case 'Trivial' : return ('rgba(255, 0, 0, 1)');
            default : return ('aliceblue');
        }
    }

    return (
        <Card className="CardColumn" style={{
            width: '18rem',
            display: 'block',
            border: props.task.done ? '2px solid green' : null,
            background: props.task.done ? 'rgba(242, 177, 13, 0.07)' : null
        }} >
            <Card.Header style={{backgroundColor : cardheaderImportance(), fontWeight : 'bold', color : 'rgba(33, 33, 33, 1)'}}>
                {props.task.importance}
            </Card.Header>
            {renameState ? renderRename() : defaultRender()}

        </Card>
    );
}

export default Task;