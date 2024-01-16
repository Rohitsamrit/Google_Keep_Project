import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function CreateNote({passnote}){
    const [note,setnote]=useState({
        title:"",
        content:"",
    })
    const [expand,setExpand]=useState(false);
    function inputEvent(event) {
        const { name, value } = event.target; // Destructuring the event.target properties
        setnote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
       
    }
    
    function addEvent(){
        passnote(note);
        setnote({
            title:"",
            content:"",
        })
    }
    function expantext(){
        setExpand(true)
    }
  return(
    <>
    <div className="main_note">
        <form >
        {expand ?  <input type="text" value={note.title} name="title"onChange={inputEvent} placeholder="Title" autoComplete="off"/> :null }
           
            <textarea  onChange={inputEvent} name="content" value={note.content} column="" rows="" placeholder="Write a Note" onClick={expantext}></textarea>
            {expand ?  <Button onClick={addEvent}>
                <AddIcon className="plus_sign"/>
            </Button> :null}
           

        </form>
    </div>

    </>
  )
}
export default CreateNote;