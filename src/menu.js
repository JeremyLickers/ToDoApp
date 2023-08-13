import { useState, useEffect } from 'react';
import TaskForm from "./task-form";
import TaskList from "./task-list";

const Menu = () => {
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/tasks')
            .then(response => {
                return response.json()
                .then(data => {
                    setTasks(data)
                })
            })
    }, [])

    return (
        <div>
            {tasks && <TaskList tasks={tasks}/> }
            <TaskForm />
        </div>
  );
};
export default Menu;
