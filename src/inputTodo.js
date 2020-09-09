import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import './App.css'

function InputTodo({inputText,setInputText,add}) {
    console.log(inputText)
    const [newI,setNewI]=useState('')
    const myChangeHandler = (event) => {
        let value = event.target.value
        setNewI(value);
    }
    return (
        <div className='header'>
        <input className='inpt' type='text' value={newI} onChange={myChangeHandler} placeholder='add a new task' ></input>
        <Button variant="primary" onClick={()=>!newI?alert("You didn't write the task"): add(newI)}>Add</Button>
        </div>
    )
}

export default InputTodo;
