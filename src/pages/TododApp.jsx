import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoAdd } from '../store/Action';

const TododApp = () => {
    const ref=useRef();
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todo.todos);

const addNew=()=>{
    let value=ref.current.value;
    dispatch(todoAdd({
        value:value,
        isCompleted:false
    })
    );
}
// useEffect(()=>{
//   axios.get("")
// })

  return (
    <div>
        <input ref={ref} type="text" placeholder='type here...' name="" id="" />
        <button onClick={addNew} >Add</button>
        <br />
        <br />
        <br />
        {todos.map((todo)=>{
           return <div key={todo.id}>{todo.value}</div>
        })}
    </div>
  )
}

export default TododApp