import React from "react"
 import './todolist.css';

function TodoList (props){
   
    const myOption = []; 
    myOption.push(props.userInput.status);
    switch (props.userInput.status){
        case "ToDo": 
        myOption.push("Inprogress");
        break;
        case "inQA":
            myOption.push("Done");
            myOption.push("ToDo");
            break;
        case "Inprogress":
                myOption.push("Blocked");
                myOption.push("inQA");
                break;
        case "Done":
                myOption.push("Deployed")
                break;
        case "Blocked":
                myOption.push("ToDo");
                break;
    }
    

    return(
        <>
        <div className="card">
        <h4 className="title">
            {props.userInput.title}
        </h4>
        <div className="desc">
            {props.userInput.desc}
        </div>
        <div className="status">
        </div>
     <select className="slct" value={props.userInput.status} onChange={(e) => {props.onSelect(e , props.userInput.id);console.log("tt")}}>
         {myOption.map((op , i) =>
            <option value={op} key={i}>{op}</option>
         )}
    </select>

        </div>
        </>


);


}
export default TodoList;
