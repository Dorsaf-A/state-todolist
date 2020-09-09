import React,{useState} from 'react';
import InputTodo from './inputTodo';
import TodoList from './todoList';
import './App.css'

function App() {
  const [txt, setTxt] = useState([
    {id:0,text:'Cooking',completed:false,edited:false},
    {id:1,text:'Shopping',completed:false,edited:false}
  ]);
  const [inputText,setInputText] = useState('')
  const add=(inputText)=>{
    setInputText(inputText);
    setTxt([...txt,{id:Math.random(),text:inputText,completed:false,edited:false}])
    setInputText('')
  }
  const delet=(i)=>{
    setTxt(txt.filter((el)=>el.id!=i ))
    console.log(i)
  }
  const save = (id, editedText) => {
    setTxt(
      txt.map((todo) =>
        todo.id === id ? { ...todo, text: editedText } : todo
      )
  );}
  
  return (<div className='App'>
  <InputTodo  inputText={inputText} add={add} setInputText={setInputText}/>
  <TodoList className='body' txt={txt} setTxt={setTxt} delet={delet} save={save}/>
  </div>
  );
}

export default App;
