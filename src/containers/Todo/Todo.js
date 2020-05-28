import React from 'react';
import Header from '../../components/Header/Header';
import AddTask from '../../components/AddTask/AddTask';
import Tasks from '../../components/Tasks/Tasks';

const Todo = () => {

        return (
            <div>
                <Header />
                <AddTask />
                <Tasks />
            </div>

        );

}

export default Todo;