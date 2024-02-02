import { useState } from "react"
import React from 'react'

function TodoItem({todo,updateTodo,toggleTodo,deleteTodo,id}) {
    const[item,setItem]=useState(todo.data)
    const[isTodoEditable,setIsTodoEditable]=useState(false)

    const toggleComplate=()=>{
        toggleTodo(todo.id)
    }
 
  return (
    <div>
        <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleComplate}
            />
        <input type='text' className = {`${todo.completed ? "line-through" : ""}`}
        value={item} onChange={(e)=>setItem(e.target.value)} readOnly={!isTodoEditable}/>
        <button onClick={()=>{ 
                   if (todo.completed) return;
                    if (isTodoEditable) {
                        updateTodo();
                        setIsTodoEditable(false)
                    } else setIsTodoEditable((prev) => !prev);
                }}
                
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
                
            </button>{todo.completed?<button onClick={()=>deleteTodo(id)}>remove</button>:""}
    </div>
  )
}

export default TodoItem