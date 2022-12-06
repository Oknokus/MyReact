import React, { Component } from 'react'
import {createPortal} from "react-dom";

import "./FormDelete_css.css"

export default class FormDelete extends Component {

onclose = () => {
    this.props.onCloseFormDelete && this.props.onCloseFormDelete()  
}

onCloseForm = () => {
  this.props.onCloseForm && this.props.onCloseForm() 
} 

render() {
    const {showFormDelete} = this.props;

    if(!showFormDelete) {
        return null;
    } 

    return createPortal (
        <div className="modal_window">  
        <span className="close" onClick={this.onclose && this.onCloseForm}
        >
          X
        </span>
        <h1 className="h1Form">DELETE MOVIE</h1>
        <div className="formSame">
        <form className="formWindow" action="/action_page.php"><br/>  
          <input className={"inputFormDelete"} placeholder={"Are you sure you want to delete this movie?"} name="TITLE" type={'text'}/><br/> 
          <div className={"buttons"}>            
            <input className={"resetButton"} type={"reset"}value="RESET"/>     
            <div
            className={"saveButton"}
            >CONFIRM</div>   
            </div>  
          </form>
        </div>
        </div>
        ,     
        document.getElementById("root")
    )
  }
}

