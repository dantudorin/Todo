import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as actionType from '../../storage/actionTypes';
import './Filter.css';

const Filter = (props) => {
    
    return (
        <div className="FilterTasks">
            <label className="FilterLabel" htmlFor="Filter">Filter by : </label>
            <select value={props.filter} onChange={(event) => props.changeFilter(event.target.value)}>
                    <option value="" disabled selected hidden>Please Choose...</option>
                    <option value="Normal">Normal</option>
                    <option value="Very important">Very important</option>
                    <option value="High">High</option>
                    <option value="Trivial">Trivial</option>
                    <option value="No filter">No Filter</option>
            </select>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        changeFilter: (newFilter) => dispatch({
            type: actionType.CHANGE_FILTER,
            filter: newFilter
        })
    }
}

const mapStateToProps = (state) => ({ filter: state.filter })

export default connect(mapStateToProps, mapDispatchToProps)(Filter);