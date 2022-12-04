import React, { Component } from "react";

import "./FormMenuActive_css.css"

export default class FormMenuActive extends Component { 
  state = {
    name: "Edit",
    nameDel: "Delete",    
  }  

  onCloseForm = (e) => {  
    e.stopPropagation()
    const {fucnOnCloseForm} = this.props;  
   
    if(fucnOnCloseForm) {
      fucnOnCloseForm();
    }
  }

  render() {
    const {funcActiveFormMenu} = this.props;  
    if (!funcActiveFormMenu) {
      return false;
    }    
    return (                     
      <div className={"form-menu_button"}> 

        <div className={"form-close_button" }
        onClick={this.onCloseForm}>
        X </div>         
      
        <div className={"form-active_button"}>
        {this.state.name}
        </div>

        <div className={"form-active_button"}>
        {this.state.nameDel}        
        </div> 

      </div>            
    )
  }
}