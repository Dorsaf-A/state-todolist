import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Example from './example';
import './App.css'

function Todos(props) {
let task=props.task;
  return(<div className='li' >
  <input type="checkbox" value={props.task} 
  onClick={()=>props.toggle(props.task.id)} 
  />
  <label style={props.task.completed?{textDecoration:'line-through',color:'green'}:null}>{props.task.text}</label>
  <Example task={task} save={props.save}/>
  <Button variant="primary" onClick={()=>props.delet(props.task.id)}>Delete</Button>
  </div>
  )
}
  


export default Todos;