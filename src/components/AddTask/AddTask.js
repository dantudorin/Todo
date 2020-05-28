import React from 'react';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import './AddTask.css';
import {connect} from 'react-redux';
import * as actionType from '../../storage/actionTypes';

const AddTask = (props) => {
    const formik = useFormik({
        initialValues: { task: '' },
        validationSchema: Yup.object({
            task: Yup.string()
                .min(15, 'Must be more than 15 characters long')
                .required('Required')
        }),
        onSubmit: values => {
            alert('Task : ' + JSON.stringify(values));
            props.addTasks(values.task)
            console.log(props.tasks);
        }
    });

    return (
        <form className="Form" onSubmit={formik.handleSubmit}>
            <textarea
                style = {formik.touched.task && formik.errors.task ? {border: '1.5px solid red'} : null}
                name="task"
                type="textarea"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.task}
                placeholder="Add your task requirements"
            />
            
            <button className="Button" disabled={formik.touched.task && formik.errors.task ? true : false}type="submit">Submit</button>
            {formik.touched.task && formik.errors.task ? (
                <div className="Error">{formik.errors.task}</div>
            ) : null}
        </form>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addTasks : (objective) => dispatch({
            type : actionType.ADD_TODO,
            objective : objective
        })
    }
}

const mapStateToProps = (state) => ({ tasks : state.tasks})

export default connect(mapStateToProps,mapDispatchToProps)(AddTask);