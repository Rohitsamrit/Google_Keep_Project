import React, { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note";
function App(){
  const [addItem,setAdditem]=useState([]);
  function addNote(note){
   setAdditem((prevdate)=>{
    return[...prevdate,note];
   })
  }

  function DeleteItem(id){
    setAdditem((olddata)=>{
     return olddata.filter((currentdata,ind)=>{
        return ind !== id;
      })
    })

  }

  return(
    <>
      <Header/>
      <Footer/>
      <CreateNote passnote={addNote}/>
      
      {addItem.map((item,index)=>{
        return (<Note key={index} id={index} title={item.title} content={item.content} deleteItem={DeleteItem}/>)
      })}
    </>
  )
}
export default App;