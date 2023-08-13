import TaskForm from "./task-form";
import TaskList from "./task-list";
const Menu = () => {
    const tasks = [
        {name:"task 1", description: "this is task one"},
        {name:"task 2", description: "this is task two", startDate: "2022-01-01"}
    ]

    return (
        <div>
            <TaskList tasks={tasks}/>
            <TaskForm />
        </div>
  );
};
export default Menu;
