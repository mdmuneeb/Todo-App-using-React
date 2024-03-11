import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [todo, saveTodo] = useState([])

  let saveTodoList =  (event) => 
  {
    let name = event.target.todoName.value;
    if (name !== '')
    {
      if (!todo.includes(name))
      {
        console.log(name);
        let finalList = [... todo,name];
        saveTodo(finalList);
        event.target.todoName.value = ''
        event.preventDefault();
      }
      else
      {
        alert("Already Present");
  
      }
    }
    else
    {
      alert("Please Enter the something");
    }
      
    }

  let removeItem = (task) =>{
    var newList = todo.filter((res) => {
      return res !== task;
    })
    saveTodo(newList);
  }
  let obj;
  let list;
  let viewList = () =>
  {
    list = todo.map((val, i) =>
      {
        obj = {
          value: val,
          index:i 
        }
        return <TodoListItems value = {obj} remove = {removeItem}/>
      }
    )
  } 

  viewList();


  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveTodoList}>
        <input type='text' name='todoName' />
        <button>
          Save
        </button>
      </form>

      <div className='outer-div'>
        <ul>
          {list}
        </ul>
      </div>

    </div>
  );
}

export default App;


function TodoListItems({value, remove})
{
  
  return (
    <li>{value.value} <span onClick={() => remove(value.value)}>X</span></li>
  )
}