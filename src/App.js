import React,{useState,useEffect} from 'react';
import './App.css';
import Form from "./components/Form";
import Todo from "./components/Todo";
function App() {
  const [inputText, setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const[status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);

useEffect(()=>{
filterHandler();
},[todos,status]);

  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo =>todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo =>todo.completed === false));
        break;
      default :
          setFilteredTodos(todos);
          break;
    }
  }
  return (
    <div className="App">
     <header>
      <h2>My ToDo list</h2>
      </header>
      <Form inputText={inputText}
       todos={todos}
       setTodos={setTodos}
       setInputText={setInputText}
       setStatus={setStatus}
        />
      <Todo todos={todos} 
      setTodos={setTodos}
       filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
