import { useState } from 'react';
import './App.css';
import Todolist from "./components/todolist"
import Form from "./components/form" 
function App() {
  const[inputtext,setinputtext] = useState("");
  const[todo,settodo] = useState([]);
  return (
    <div className="App">
     <header>
       <form id="to-do-form">
          <Form inputtext={inputtext} todo={todo} settodo={settodo} setinputtext={setinputtext}/>
          <Todolist setinputtext={setinputtext} settodo={settodo} todo={todo}/>
       </form>
     </header>
    </div>
  );
}

export default App;
