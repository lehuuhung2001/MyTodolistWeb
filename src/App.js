import { useState } from 'react';
import './App.css';
import Todo from './Todo/Todo';
function App() {
  const [data,setData] = useState('')
  const [todo, setTodo] = useState([]);
  const [bg_color,setBg_color] = useState(false)
  const handle_delete = (index) => {
    const remove_arr = todo;
    remove_arr.splice(index, 1);
    setTodo([...remove_arr]);
  };
  const handle_add = (e) =>{
    setTodo(pre => [...pre,data])
    setData('')
    e.preventDefault();
  }
  const handle_press = (index) => {
    setBg_color(current => !current)
    
  }
  return (
    <div>
      <div className="App" id="idApp">
        <h2>To-Do List</h2>
        <p>Enter text into the input field to add items to your list</p>
        <p>Click the "X" to remove the item from your list</p>
        <p>Click the item to mark it as complete</p>
        <form className="input_data" onSubmit={handle_add}>
          <input
            placeholder="Input to do"
            id="id_input"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <div onClick={handle_add}>+</div>
        </form>
      </div>

      <div className="list">
        {todo.map((data, index) => (
          <div className="element" style={{backgroundColor:bg_color?'blue':'green'}} onClick={(index) => handle_press(index)}>
            <p key={index}>{data}</p>
            <p className="delete" onClick={() => handle_delete(index)}>
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
