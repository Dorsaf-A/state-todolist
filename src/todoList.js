import React,{useState} from 'react';
import Todos from './todos'

function TodoList({txt,setTxt,delet,save}) {
  console.log(txt)
  const toggle=(id)=>{
  setTxt(txt.map((el)=>el.id===id ? {...el,completed:!el.completed}:{...el,completed:el.completed} ))
  }

  return (<div>
  {txt.map((el)=>(<div>
    <Todos task={el} delet={delet} setTxt={setTxt} toggle={toggle} txt={txt} save={save} /><br></br>
    </div>))}
    </div>
  )}

export default TodoList;