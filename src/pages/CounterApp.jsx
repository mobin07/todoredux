import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countDec, countInc } from '../store/Action';

const CounterApp = () => {
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.counter.count)
  return (
    <div><h1>CounterApp:-{count}</h1>
    <button onClick={()=>dispatch(countInc())}>+</button>
    <button onClick={()=>dispatch(countDec())}>-</button>
    </div>

  )
}

export default CounterApp