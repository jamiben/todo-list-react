import React, { ChangeEvent, useState } from 'react';
import './App.css';
import './App.css';

import todoListImage from './images/todo-list.jpg';

import TodoList from './Components/TodoList';
import Header from './Components/children/Hearder/Header';
import data from './data.json';
import TodoForm from './Components/children/TodoForm/TodoForm';


function App() {

  const [todoListData, setTodoListData] = useState(data);
  const [isChecked, setIsChecked] = useState(false);



  const handleToggle = (id:number) => {
    let mappedTodo = todoListData.map(task => {
      return task.id === id ? {...task, completed : !task.completed} : {...task};
    })

    setTodoListData(mappedTodo);
  };

  const handleFilter = () => {
    let filterTodo = todoListData.filter(task => !task.completed )
    setTodoListData(filterTodo);
  };

  const addTask = (userInput: any) =>  {
    let copy = todoListData.slice();
    copy.push({id: todoListData.length + 1, task: userInput, completed: false });
    setTodoListData(copy);
  }

  const hadleChange = () => {
    setIsChecked(!isChecked);
}


  return (
    <div className="App" >

      <Header/>
      <TodoForm addTask={addTask} />
      <TodoList todoListData={todoListData} handleFilter={handleFilter} handleToggle={handleToggle} handleChange={hadleChange} isChecked={isChecked}/>
        {/* <TodoList /> */}
    </div>
  );
}

export default App;
