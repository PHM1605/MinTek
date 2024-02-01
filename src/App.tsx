import {useState, useEffect} from "react";
import {Task} from "./shared/task";
import {remult} from "remult";

const taskRepo = remult.repo(Task);

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(()=>{
    taskRepo.find().then(setTasks);
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      <main>
        {tasks.map(task=>{
          return <div key={task.id}>
            <input type="checkbox" checked={task.completed} />
            {task.title}
          </div>;
        })}
      </main>
    </div>
  )
}

export default App
