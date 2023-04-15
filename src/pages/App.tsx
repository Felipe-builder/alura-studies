import React, { useState } from 'react';
import style from './App.module.scss';

// Componentes
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { ITask } from '../types/task';



function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks(previousTask => previousTask.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })));
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch selected={selected} /> 
    </div>
  );
}

export default App;
