import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import TaskList from './task-list'

const Menu = () => {
    const { data: tasks, error } = useFetch('http://localhost:8000/tasks')
    return (
        <div>
            { error && <div> {error} </div> }
            { tasks && <TaskList tasks={tasks}/> }
            <Link to="/task-form">Create New Task</Link>
        </div>
  );
};
export default Menu;
