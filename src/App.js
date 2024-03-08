import React from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import VisibilityFilters from "./Components/VisibilityFilters";
import "./styles.css";

export default function App() {
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    );
  }
