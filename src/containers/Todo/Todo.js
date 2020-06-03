import React from 'react';
import Header from '../../components/Header/Header';
import AddTask from '../../components/AddTask/AddTask';
import Tasks from '../../components/Tasks/Tasks';
import Filter from '../../components/Filter/Filter';

const Todo = () => {

        return (
            <div>
                <Header />
                <AddTask />
                <Filter />
                <Tasks />
            </div>

        );

}

export default Todo;