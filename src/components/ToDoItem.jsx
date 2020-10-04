import React, { useState } from 'react';


function ToDoItems(props){
    const [isDone,setIsDone]=useState(false);
    function crossItem(){
        setIsDone(prevValue=>{
            return !prevValue;
        });
    }

    return <div> 
        <input className="checkbox" onClick={crossItem} type="checkbox"/> <p contentEditable="true" style={{textDecoration:isDone?"line-through":"none",fontWeight:isDone?"100":"none"}}>{props.text}</p></div>
       
}
export default ToDoItems;