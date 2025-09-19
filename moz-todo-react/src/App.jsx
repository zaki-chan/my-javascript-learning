import { useState, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Todo from "./components/Todo.jsx";
import Form from "./components/Form.jsx";
import FilterButton from "./components/FilterButton.jsx";

function usePrevious(value){
  const ref = useRef();
  useEffect(()=> {
    ref.current = value;
  });
  return ref.current;
}
// App()関数外での定義は、<App />コンポーネントが際レンダリングされても
// 再計算されない
const FILTER_MAP = {
  All:() =>true,
  Active: (task) => !task.completed,
  Completed: (task) =>task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props){
  const [tasks,setTasks] = useState(props.tasks);
  const [filter,setFilter] = useState("All");

  const filterList = FILTER_NAMES.map((name)=>(
    <FilterButton
      key={name}
      name={name}
      isPressed={name===filter}
      setFilter={setFilter}
    />
  ))

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map((task) =>{
      if(id===task.id){
        return {...task, completed: !task.completed};
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function editTask(id,newName){
    const editedTaskList = tasks.map((task) =>{
      if(id===task.id){
        return {...task,name:newName};
      }

      return task;
    });
    setTasks(editedTaskList);
  }
  function deleteTask(id){
    const remainingTasks = tasks.filter((task)=>id!== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.filter(FILTER_MAP[filter]).map((task)=>(
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  function addTask(name){
    const newTask = {id:`todo-${nanoid()}`,name,completed:false};
    setTasks([...tasks,newTask]);
  }

  const tasksNoun = taskList.length !==1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  const listHeadingRef = useRef(null);

  const prevTaskLength = usePrevious(tasks.length);

  useEffect(()=>{
    if(tasks.length < prevTaskLength){
      listHeadingRef.current.focus();
    }
  },[tasks.length,prevTaskLength]);
  return(
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>

      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>

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