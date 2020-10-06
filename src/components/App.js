import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ToDoItems from './ToDoItem.jsx'
import Heading from './Heading';

function App() {
  const [inputText, setInputText]=useState("");
  const [items, setItems]=useState([]);
  function handleChange(event){
const newValue=event.target.value;
setInputText(newValue); 
  }
  function handleClick(){
    if(inputText!=="" &&inputText.length<15){
      setItems((previtems)=>{
        return [...previtems,inputText];
      })
      setInputText("");
    }else{
      console.log("err");
    }
    }
    function deleteItem(id){
      setItems((previtems)=>{
return previtems.filter(
  (item,index)=>{
return index!==id;
  }
);
      });
    }
  
  return (
    <div className="container">
      <div className="header">
        <Heading/>
      </div>
    <div className="form">
      <input className="inputText" type="text" onChange={handleChange} value={inputText}/>
      
    </div>
    <div>
      <ul>
        {items.map((ToDOitem,index)=>(
<ToDoItems
key={index}
id={index} 
text={ToDOitem}
onchecked={deleteItem}

/>
        ))}
      
      </ul>
     
    </div>
    <button className="button-add" onClick={handleClick}> <span>+</span></button>

    </div>
  );
}

export default App;
