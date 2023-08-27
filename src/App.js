import "./App.css";
import Menu from "./menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import TaskForm from "./task-form";
import TaskDetails from "./task-details"
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content"></div>
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/task-form">
            <TaskForm/>
          </Route>
          <Route path="/tasks/:id">
            <TaskDetails/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
