 
import './App.css';
import TodoBoard from './TodoBoard.js' 
import { useState } from 'react';

function App() {
  
  const [inputValue, setInputValue] =useState('hello!');
  const [todoList, setTodoList] =useState([]);
  
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  }

  return (
    <div className="App">
       <p>app.js에 인풋과 버튼 만들기</p>
       <p>밑에 To do Board 만들기</p>
       <p>그 안에 To do item 만들기</p>
       <hr />
       <input onChange={(event) => {
        setInputValue(event.target.value)
       }} type="text" value={inputValue} placeholder='hello world!'/> 
       <button onClick={addItem}>add me!</button>
       <TodoBoard todoList={todoList}></TodoBoard>
         
    </div>
  );
}

export default App;

 