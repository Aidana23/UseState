import React from "react";
import './Todo.css'

const Item = ({ todo, index, doneTodo, editTodo, deleteTodo }) => {
  return (
    <div>
        <h2>
            <span className="span">{`${index + 1}`}</span>
            {todo.name}
        </h2>

        <p>{ todo.status === 'new'
            ? 'Todo is not done'
            : todo.status === 'processing'
                ? 'Todo is Processing'
                : 'Completed!!!'
            
        }</p>

        

        <p>
        { todo.status === 'new'
            ? 'Todo is not edited'
            : todo.status === 'editing'}
        </p>
 
        <p>
        { todo.status === 'new'
            ? 'Todo is not deleted'
            : todo.status === 'editing'}
        </p>

        <button className="todoBtn" onClick={()=>doneTodo(todo.id)}>Done</button>
        <button className="todoBtn" onClick={()=>editTodo(todo.id)}>Edit</button>
        <button className="todoBtn" onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Item;
