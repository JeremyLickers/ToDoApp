import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "./useFetch"
import { useState } from 'react'
import TaskForm from "./task-form"

const TaskDetails = () => {
    const { id } = useParams()
    const { data: task, error } = useFetch('http://localhost:8000/tasks/'+id)
    // const [description, setDescription] =useState(task.description)
    const [editMode, setEditMode] = useState(false)
    const handleEdit = () => {
        // setDescription(description)
        setEditMode(true)
    }
    return (
        <div>
            { error && <div> {error} </div> }
            { task && 
                <div>
                    { !editMode && <div>{task.description} <button type='button' onClick={handleEdit}>Edit</button></div> }
                    { editMode && <TaskForm task = { task } onSave =  { setEditMode }/> }
                </div> 
            }
        </div>
    )
}

export default TaskDetails