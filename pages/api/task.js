const tasks = ["Task-1", "Task-4"]
export default function handler(req, res){
  const { method } = req;
  if(method === 'GET'){
    res.status(200).json({
      status: true,
      data: tasks,
      message: 'Tasks fetched successfully'
    })
  }
  else if(method === 'POST'){
    const {task} = req.body;
    tasks.push(task);
    res.json({
      status: true,
      data: tasks,
      message: 'Task added successfully'
    })
  }
  else if(method === 'DELETE'){
    const {taskNumber} = req.body;
    tasks.splice(taskNumber, 1);
    res.json({
      status: true,
      data: tasks,
      message: 'Task deleted successfully'
    })
  }
  else{
    res.json({
      status: false,
      message: 'Invalid request'
    })
  }
};
