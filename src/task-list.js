import isEmpty from "lodash.isempty"
import { Link } from 'react-router-dom';

const TaskList = (props) => {
    const tasks = props.tasks
    const handleClick = (id) => {
        fetch('http://localhost:8000/tasks/' + id, {
            method: 'DELETE'
        })
    }
    if (isEmpty(tasks)) return null
    return (
        <div>
        {tasks.map((task) => 
            (
                <div key={task.id}>
                    <Link to={`/tasks/${task.id}`} ><h2>{task.name}</h2></Link>
                    <h4>{ task.startDate }</h4>
                    <h4>{ task.endDate }</h4>
                    <h3>{ task.description }</h3>
                </div>
            )
        )}
        </div>
    )
}

export default TaskList