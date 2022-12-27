import React from 'react';
// import {  MdCancel } from "react-icons/md";
const TodoList=(props)=>{


 
    return (
     <>
       <div className="todo_style">
          <i className="fa fa-times" aria-hidden="true"
           
            
            //  < MdCancel
            onClick={()=>{
                props.onSelect(props.id);
            }
            }
                  
            // />
            />
          <li> {props.text} </li>
       </div>
     </> 
    );
}

export default TodoList;