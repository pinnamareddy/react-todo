import React from 'react'
import "../App.css"
function form({setinputtext, inputtext, settodo , todo}) {
    const inputtexthandler = (e) =>{
        console.log(e.target.value);
        setinputtext(e.target.value);

    }
    const textchanger = (e) =>{
        e.preventDefault();
        settodo([...todo,
            {text:inputtext , completed:false, id:Math.random()*1000}
        ]);
        setinputtext("");
    }
    return (
           <form>
               <div className="form">
                <div className="a"><input value={inputtext} type="text" className="todo-input" 
                  onChange={inputtexthandler}></input></div>
                <div className=""> <button onClick={textchanger} >add</button></div>
               </div>
           </form> 
        
    )
}

export default form
