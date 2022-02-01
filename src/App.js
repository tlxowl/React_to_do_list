import React,  {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Form from './components/form';
import TodoList from './components/todolist';

const App = () => {

  const initState = JSON.parse(localStorage.getItem("todo")) || [];
  const [editList,setEditList] = useState(null);
  const [input,setInput] = useState("");
  const [todo,setTodo] = useState(initState);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  })

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form 
           input={input}
           setInput={setInput}
           todo={todo}
           setTodo={setTodo}
           editList={editList}
           setEditList={setEditList}
          />
        </div>
        <div>
          <TodoList 
            todo={todo}
            setTodo={setTodo}
            setEditList={setEditList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;