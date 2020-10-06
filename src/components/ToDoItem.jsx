import React, { useState } from 'react';


function ToDoItems(props){
    const [isDone,setIsDone]=useState(false);
    
    function crossItem(){
        setIsDone(prevValue=>{
            return !prevValue;
            
        });
    }
    
    return <div> 
        <input className="checkbox"  onClick={crossItem} type="checkbox"/> <p style={{textDecoration:isDone?"line-through":"none",fontWeight:isDone?"100":"none"}} >{props.text}</p>
        <button style={{display:isDone?"inline":"none"}} onClick ={()=>
            {props.onchecked(props.id);}} 
        className="btn-delete">delete</button> 
  
        </div>
      }
export default ToDoItems;