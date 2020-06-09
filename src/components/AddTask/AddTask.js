import React from 'react';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import './AddTask.css';
import { connect } from 'react-redux';
import * as actionType from '../../storage/actionTypes';

const AddTask = (props) => {
    const formik = useFormik({
        initialValues: { task: '', importance: '' },
        validationSchema: Yup.object({
            task: Yup.string()
                .min(15, 'Must be more than 15 characters long')
                .required('Required'),

            importance: Yup.string()
                .oneOf(['Very important', 'High', 'Normal', 'Trivial'])
                .required('Please select task importance')

        }),
        onSubmit: values => {
            alert('Task : ' + JSON.stringify(values));
            props.addTasks(values.task, values.importance);
        }
    });
    formik.touched.importance = true;
    return (
        <form className="Form" onSubmit={formik.handleSubmit}>
            <div className="ImportanceSection">
                <label className="ImportanceLabel" htmlFor="taskImportance">Task importance :</label>
                <select className="ImportanceDropdown" name="importance" id="taskImportance" onChange={formik.handleChange} value={formik.values.importance}>
                    <option value="" disabled selected hidden>Please Choose...</option>
                    <option value="Normal">Normal</option>
                    <option value="Very important">Very important</option>
                    <option value="High">High</option>
                    <option value="Trivial">Trivial</option>
                </select>
            </div>
            {formik.touched.importance && formik.errors.importance ? (
                <div className="Error">{formik.errors.importance}</div>
            ) : null}
            <textarea className="TextArea"
                style={formik.touched.task && formik.errors.task ? { border: '1.5px solid red' } : null}
                name="task"
                type="textarea"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.task}
                placeholder="Add your task requirements"
            />

            <button className="Button" disabled={formik.touched.task && formik.errors.task ? true : false} type="submit">Submit</button>
            {formik.touched.task && formik.errors.task ? (
                <div className="Error">{formik.errors.task}</div>
            ) : null}
        </form>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addTasks: (objective, importance) => dispatch({
            type: actionType.ADD_TODO,
            objective: objective,
            importance : importance
        })
    }
}

const mapStateToProps = (state) => ({ tasks: state.tasks })

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);