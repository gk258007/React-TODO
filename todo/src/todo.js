import React,{useState} from "react";
import Pomodoro from "./pomodoro";

function todo(){
    const [todos, setTodos] = useState(['']);
  const [input, setInput] = useState('');

  const addTodos = (event) => {
    event.preventDefault();
    setInput('');
    setTodos([...todos,input]);
    setInput('');
  }
  const done = () =>{
    alert("OMG");
  }
  return(
    <div className="App">
      <div>
        <Pomodoro/>
      </div>
    <h1 style={{color:"white"}}>To-Do Stuffs 📝</h1>
    <form>
    <input value={input}  onChange={event => setInput(event.target.value)}/>
    <button onClick={addTodos} style={{color:"BLACK"}}>TASK</button>
    </form> 
    <ul className="list">
      <h2 for="task"style={{fontSize:"20px",fontStyle:"bold",color:"white"}}>TASK's 👩‍🚀</h2>
      {todos.map(todo => (        
        <form>
          <input type="checkbox" id="task"/>
            <label for="task" style={{color:"white"}}>{todo}</label>
            </form>
              ))}    
    </ul>
       </div>
  );
}
export default todo