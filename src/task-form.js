import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { TextField } from "@mui/material";

const TaskForm = () => {
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [description, setDescription]= useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const task = { name, startDate, endDate, description}
    fetch('http://localhost:8000/tasks', {
      method: 'POST',headers: { "content-Type": "application/json" },
      body: JSON.stringify(task)
    })
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
      <button>Save</button>
      <Link to="/">Menu</Link>
    </form>
  );
};
export default TaskForm;
