import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Example from './example';
import './App.css'

function Todos(props) {
const [state,setState] = useState({
    showBox: false
  });

  const handleBoxToggle = () => setState({ showBox: !state.showBox });

let task=props.task;
  return(<div className='li' onMouseEnter={handleBoxToggle} onMouseLeave={handleBoxToggle} style={state.showBox?{borderColor:'whitesmoke',fontSize:'20px'}:{borderColor:' rgb(75, 151, 75)'}} >
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