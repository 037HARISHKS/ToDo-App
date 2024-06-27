import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import {getAllToDo,addToDo,updateToDo,deleteToDo} from './utils/handleApi'

function App() {

  const [toDo,setToDo] = useState([])
  const [text, setText] = useState("")
  const [Isupdate, setIsupdate] = useState(false)
  const [toDoId, settoDoId] = useState("")
  
  useEffect(( ) => {
    getAllToDo(setToDo)
  },[])

  const updateMode = (_id,text ) =>{
    setIsupdate(true)
    setText(text)
    settoDoId(_id)
  }
  

  return (
    <div className="App">
        <div className="container">
          <h1>ToDo Application</h1>
          <div className="top ">
            <input type="text" placeholder ="Add ToDos..."
             value={text}
             onChange={(e)=>setText(e.target.value)}
            />
            <div className='add' 
            onClick={Isupdate? ()=>updateToDo(toDoId,text,setText,setToDo,setIsupdate) : () => addToDo(text,setText,setToDo)}>
              {Isupdate? "Update ":"Add"}
            </div>
          </div>

          <div className="list">
            {toDo.map((item) => <Todo 
            key = {item._id} text = {item.text}
            updateMode={()=> updateMode(item._id,item.text)}
            deleteToDo={() => deleteToDo(item._id,setToDo)}
            />)}
          </div>
          
        </div>
        
    </div>
  );
}

export default App;
