import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskList from "./task-list";

const Menu = () => {
    const [tasks, setTasks] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/tasks')
            .then(res => {
                if(!res.ok){
                    throw Error('Database connection error');
                }
                return res.json();
            })
            .then(data => {
                setTasks(data);
                setError(null);
            })
            .catch(err => {
                    console.log('err--',err)
                    setError(err.message);
            })
    }, []);
    console.log(error)
    return (
        <div>
            { error && <div> {error} </div> }
            { tasks && <TaskList tasks={tasks}/> }
            <Link to="/task-form">Create New Task</Link>
        </div>
  );
};
export default Menu;
