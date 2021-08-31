import React from 'react'

const todo = ({text,todo,settodo,todos,setinputtext}) => {
    const deletehandler = (event) => {
        event.preventDefault();
       settodo((todo) =>todo.filter((el) => el.id !==todos.id));
       }
    const Correct = (event,index) =>{
    event.preventDefault();

    setinputtext(todos.text)
    settodo((todo) =>todo.filter((el) => el.id !==todos.id));
    console.log(todo)
}    
   const completed = (event) => {
    event.preventDefault();
    
   }  
    return (
        <div>
            <li className="todo=item">{text}</li>
            <button onClick={deletehandler}>close</button>
            <button onClick={Correct}>edit</button>
            <button onClick={completed}>completed</button>
        </div>
    )
}

export default todo
