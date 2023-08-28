import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { TextField } from "@mui/material"
import isEmpty from "lodash.isempty"

const TaskForm = ({task = null}) => {
  const [name, setName] = useState(task ? task.name:'')
  const [startDate, setStartDate] = useState(task ? task.startDate: new Date());
  const [endDate, setEndDate] = useState(task ? task.endDate: new Date());
  const [description, setDescription]= useState(task ? task.description: '')
  const handleSubmit = (e) => {
    // e.preventDefault()
    const newTask = { name, startDate, endDate, description}
    if (!isEmpty(task)){
      fetch('http://localhost:8000/tasks/'+task.id, {
        method: 'PUT',headers: { "content-Type": "application/json" },
        body: JSON.stringify(newTask)
      })
    }
    else{
      fetch('http://localhost:8000/tasks', {
        method: 'POST',headers: { "content-Type": "application/json" },
        body: JSON.stringify(newTask)
      })
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker 
        selected={endDate} 
        onChange={(date) => 
        setEndDate(date)} 
      />
      <TextField
        id="outlined-multiline-static"
        multiline
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        >
      </TextField>
      <button type='submit'>Save</button>
    </form>
  );
};
export default TaskForm;
