import React, { Component } from "react";
import {createPortal} from "react-dom";

import "./ModalForm_css.css"

export default class ModalForm extends Component { 
  
  render() {
  
    const {showFormModal, title, onClose, buttonText, children} = this.props
    if (!showFormModal) {         
      return null;
    }  
      
    return createPortal  (               
      <div className="modal_window">  
          <span className="close" onClick={onClose}>
            X
          </span>
          <h1 className="h1Form">{title}</h1>
          <div className="formSame">
          <form className="formWindow" action="/action_page.php"><br/>  
          {children}   
            <div className={"buttons"}>            
            <input           
            className={"resetButton"} type={"reset"}value="RESET"/>     
            <input className="submitButton" type={"submit"} value={buttonText}/>   
            </div>        
          </form>
          </div>
        </div>    
      ,     
      document.getElementById("root")      
    )
  }
}


