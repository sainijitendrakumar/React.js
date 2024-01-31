import React, { useState } from 'react'

function TodoList() {
    const[data,setData]=useState();
    const[todo,setTodo]=useState([]);

    const addValue=()=>{
        setTodo((todo)=>
            [...todo,{id:Date.now(),data}]
        );
        console.log(todo)
        setData('')
    }

  return (
    <div>
        <input type='text' placeholder='write somthing' value={data} onChange={(e)=>setData(e.target.value)}/>
        <button onClick={addValue}>add</button>
          <ul>{todo.map((item)=><div key={item.id}>{item.data} and {item.id}</div>)}</ul>
    </div>
  )
}

export default TodoList