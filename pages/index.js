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

      <h1 className={styles.heading}>My ToDo App</h1>

      <div className={styles.taskContainer}>
        {
          tasks.map((task, index) => (
            <div key={index} className={styles.taskCard}>
              <h3 className={styles.taskHeading}>{task} <span className={styles.deleteButton}>X</span></h3>
            </div>
          ))
        }
      </div>
      <div className={styles.addContainer}>
        <input type="text" placeholder='Enter Task' className={styles.taskInput} value={task} onChange={(e)=>{setTask(e.target.value)}}/>
        <button type="button" className={styles.buttonAdd} onClick={addTask}>Add Task</button>
      </div>
    </div>
  )
}
