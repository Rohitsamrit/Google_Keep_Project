import React from "react";
import logo from "../Images/logo.ico";  // Adjust the path based on your project structure

function Header(){
  return(
    <> 
      <div className="header">
        <img src={logo} alt="logo" width='70' height='50' />
        <h1>Google Keep</h1>
      </div>
    </>
  )
}
export default Header;