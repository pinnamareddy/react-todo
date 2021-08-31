import React from 'react'
import Todo from "./todo"
function todolist({todo, settodo, setinputtext}) {
    return (
        <div>
          {todo.map((todos) =>(
              <Todo setinputtext={setinputtext} key={todos.id} text ={todos.text}
                todo={todo} todos={todos} settodo={settodo}/>
          ))}
        </div>
    )
}

export default todolist
