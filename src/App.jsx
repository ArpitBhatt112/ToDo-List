import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = ()=>{
 const [inputList,setInputList]= useState("");

 const [Items,setItems]= useState([]);

const ItemEvent=(event)=>{
    setInputList(event.target.value);
};
 const listofItems=()=>{
setItems((oldItems)=>{
return [...oldItems,inputList ]
});
setInputList("");
};

const deleteItems =(id)=>{
    console.log("deleted ");
    setItems((oldItems)=>{
 return oldItems.filter((arrElem,index)=>{
return index !==id;


 });

    });

    };
    

    return <>
   <div className="main_div">
    <div className="center_div">
        <br/>
        <h1>ToDO List</h1>
        <br/>
        <input type="text" placeholder="Add a Items" 
        value={inputList}
        onChange={ItemEvent}/>
        <button onClick={listofItems}>+</button>
        <ol>
        {Items.map((itemval,index)=>{

         return  <ToDoList 
            key={index}
            id={index}
           text={itemval}
         onSelect={deleteItems}
         />
            

        })}
           
        </ol>
    </div>
   </div>
  </>

};
export default App;