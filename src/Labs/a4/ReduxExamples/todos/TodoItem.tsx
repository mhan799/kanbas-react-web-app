import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";


function TodoItem(
//     { todo, deleteTodo, setTodo }: {
//     todo: { id: string; title: string };
//     deleteTodo: (id: string) => void;
//     setTodo: (todo: { id: string; title: string }) => void;
//   }
    {todo, }: {todo: {id:string; title:string}}
  ) {
    const dispatch = useDispatch()
    return (    

      <li key={todo.id} className="list-group-item">
        <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
        <button onClick={() => dispatch(setTodo(todo))}> Edit </button>
        {todo.title}
      </li>
    );
  }
  export default TodoItem;
  
  