import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function Note({title,content,id,deleteItem}){

  function dete(){
    deleteItem(id);

  }
  return(
    <>
    <div className="note">
        <h1>{title}</h1>
        <br />
        <p>{content}</p>
        <button className="btn" onClick={dete}>
        <DeleteOutlineIcon className="deleteIcon"/>
        </button>
        
    </div>

    </>
  )
}
export default Note;