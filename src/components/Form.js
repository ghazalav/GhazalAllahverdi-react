
import './style.css';
import React, {useState} from "react";
import TodoList from './TodoList';


function Form (props) {
const [input , setInput] = useState ([]);
const [todo , setTodo]=useState({id: 123,title:"",desc:"",status:"ToDo"});

const submitHandeler = (e) => {
  
  e.preventDefault();
if(todo?.title && todo?.desc){
            
            setTodo({id: Math.floor(Math.random() * 1000),title:todo.title,desc:todo.desc,status:"ToDo"});
            setInput([...input,todo]);
            setTodo({id:'',title:"",desc:"",status:"ToDo"});
            let result = todo;
            console.log(result);
            return result;
        }
 

};

const handleChange = e => {
  setTodo({...todo,[e.target.name]:e.target.value});
 
};

const onSelect = (e , id) =>{
  const newInput = [...input];
  const upTodoIndex = newInput.findIndex((task) => task.id === id);
   newInput[upTodoIndex].status = e.target.value;
  setInput(newInput);
  
};
  return(
      <>
          <div className="mid">
              <h4 className="text">
                  Add new Task
              </h4>
              <form >
                  <input type="text"  className="box" onChange={handleChange} name="title" placeholder="title" value={todo.title}/>
                  <textarea name="desc"  className="textarea" onChange={handleChange} placeholder="description" cols="46" rows="8" value={todo.desc} />
                  <input type="button" name="create"  className="button"  value={"Add"} onClick={submitHandeler} />
              </form>
          </div>
          <div className='center'>
           <div className='task'>
            <h4 className='a'>
              Tasks
            </h4>
            </div>
            <div className='showDiv'>
            {input.map ((myTodo ,id) =>
             <TodoList key={id} userInput={myTodo} onSelect={(e , id) => onSelect(e , id)}/>
            )}
            </div>
           
            </div>
      
          </>


  );




}

export default Form;