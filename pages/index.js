import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  async function getTasks(){
    const response = await axios.get('/api/task');
    setTasks(response.data.data);
  }

  async function addTask(){
    const response = await axios.post('/api/task', {
      task: task
    })
    setTasks(response.data.data)
    setTask("")
  }

  useEffect(() => {
    getTasks();
  }, [])

  return (
   <div className={styles.container}>
      {
        tasks.map((task, index) => (
          <div key={index}>
            <h3>{task}</h3>
          </div>
        ))
      }
      <div>
        <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
        <button type="button" onClick={addTask}>Add</button>
      </div>
    </div>
  )
}
