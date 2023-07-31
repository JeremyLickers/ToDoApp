import "./App.css";
import Task from "./Task";
function App() {
  const title = "Hello World";
  const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1> {title} </h1>
        <p>Liked {likes} times</p>
      </div>
      <Task />
    </div>
  );
}

export default App;
