import React from 'react'
import Header from './Header'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {inc,dec} from './assets/states/reducers/index'
const App = () => {
  const cureState = useSelector((state)=>state.number);
  const dispactch = useDispatch();
  return (
    <div>
      <Header/>
      <h1>React Redux tutorial</h1>
      <div>
        <h1>{cureState}</h1>
        <button onClick={()=>dispactch(inc(10))} >inc</button>
        <button onClick={()=>dispactch(dec(5))}>dec</button>
      </div>
    </div>
  )
}

export default App