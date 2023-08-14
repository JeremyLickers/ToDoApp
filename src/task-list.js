import isEmpty from "lodash.isempty"

const TaskList = (props) => {
    const tasks = props.tasks
    if (isEmpty(tasks)) return null
    return (
        <div>
        {tasks.map((task) => 
            (
                <div key={task.name}>
                    <h2>{ task.name }</h2>
                    <h4>{ task.startDate }</h4>
                    <h3>{ task.description }</h3>
                </div>
            )
        )}
        </div>
    )
}

export default TaskList