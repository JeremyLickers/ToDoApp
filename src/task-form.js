import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { TextField } from "@mui/material";

const TaskForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div>
      <label>Name: </label>
      <input></input>
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
      defaultValue="">
      </TextField>
      <button>Save</button>
      <Link to="/">Create New Task</Link>
    </div>
  );
};
export default TaskForm;
