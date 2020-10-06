import React, { useState } from 'react';


function ToDoItems(props){
    const [isDone,setIsDone]=useState(false);
    
    function crossItem(){
        setIsDone(prevValue=>{
            return !prevValue;
        });
    }
const contentEdit={
    contentEditable:"true"
}
    return <div> 
        <input className="checkbox" onClick={crossItem} type="checkbox"/> <p onDoubleClick={contentEdit} style={{textDecoration:isDone?"line-through":"none",fontWeight:isDone?"100":"none"}}>{props.text}</p></div>
       
}
export default ToDoItems;