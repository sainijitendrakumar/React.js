import React, { useState } from 'react'

import TodoItem from './TodoItem';

function TodoList() {
    const[data,setData]=useState();
    const[todo,setTodo]=useState([]);

    const updateTodo=(id,todos)=>{
      setTodo((elem)=>elem.map((prev)=>prev.id===id?todos:prev))
      
    }

    

  
    const toggleTodo=(id)=>{
      setTodo((prev)=>prev.map((item)=>item.id===id?{...item,completed:!item.completed}:item))
     }
  
    

    const addValue=()=>{
        setTodo((todo)=>
            [...todo,{id:Date.now(),data,completed:false}]
        );
        setData('')
    }

  const deleteTodo=(id)=>{
    setTodo((prev)=>prev.filter((item)=>item.id!==id))
  }

  return (
    <div>
        <input type='text' placeholder='write somthing' value={data} onChange={(e)=>setData(e.target.value)}/>
        <button onClick={addValue}>add</button>
          {todo.map((item)=>
          <div key={item.id}><TodoItem id={item.id} todo={item} updateTodo={updateTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            
          </div>
          )}
    </div>
  )
}

export default TodoList