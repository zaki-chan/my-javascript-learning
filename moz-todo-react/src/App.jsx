import { useState } from 'react';
import { nanoid } from 'nanoid';
import Todo from "./components/Todo.jsx";
import Form from "./components/Form.jsx";
import FilterButton from "./components/FilterButton.jsx";


function App(props){
  const [tasks,setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map((task) =>{
      if(id===task.id){
        return {...task, completed: !task.completed};
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function deleteTask(id){
    const remainingTasks = tasks.filter((task)=>id!== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks?.map((task)=>(
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  function addTask(name){
    const newTask = {id:`todo-${nanoid()}`,name,completed:false};
    setTasks([...tasks,newTask]);
  }

  const tasksNoun = taskList.length !==1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return(
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2 id="list-heading">{headingText}</h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;