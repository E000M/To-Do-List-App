import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

 
  const addTodo = (text) => {

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos((ptodos)=>[...ptodos, newTodo]);

  };


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  const toggleTodo = (id) => {

    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );

  };

 
  const filteredTodos = todos.filter(todo => {

    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;

    return true;

  });

  return (

    <div className="container">

      {/* Main Title */}
      <h1>To-do Planner</h1>

      {/* Subtitle */}
      <p className="subtitle">
        
      </p>

      {/* Subtitle */}
      <p className="subtitle">
        
      </p>
      {/* Input Section */}
      <Header addTodo={addTodo} />

      {/* Task List Title */}
      <h2 className="taskTitle">Your tasks</h2>

      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />

      {/* Filters */}
      <Footer setFilter={setFilter} />

    </div>

  );

}

export default App;