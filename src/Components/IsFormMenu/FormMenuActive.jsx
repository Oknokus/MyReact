import React, { Component } from "react";
import FormDescriptionEdit from "../FormDescriptionEdit/FormDescriptionEdit" 
import FormDelete from "../FormDelete/FormDelete";

import "./FormMenuActive_css.css"

export default class FormMenuActive extends Component { 
  state = {
    showFormEdit: false,  
    showFormDelete: false, 
  };
  
  showModalEdit = () => {
    this.setState({
      showFormEdit: true ,           
    })     
  };

  closeModalEdit = () => {
    this.setState({
      showFormEdit: false,
    });
  }  

  showModalDelete = () => {
    this.setState({
      showFormDelete: true,      
    })
  };

  closeModalDelete = () => {
    this.setState({
      showFormDelete: false,
    });
  }  
  
  onCloseForm = (e) => {  
    e.stopPropagation()
    const {fucnOnCloseForm} = this.props;  
   
    if(fucnOnCloseForm) {
      fucnOnCloseForm();
    }
  }

  render() {
       const {showFormEdit} = this.state
       const {showFormDelete} = this.state

    const {funcActiveFormMenu} = this.props;  
    if (!funcActiveFormMenu) {
      return false;
    } 

    return (                     
      <div className={"form-menu_button"}> 
        
        <div className={"form-close_button" }
        onClick={this.onCloseForm}>
        X  
        </div>    
       
         <div 
         className={"form-active_button"}
         onClick={this.showModalEdit}          
         >
         EDIT        
         </div>
         
    
        <div       
        className={"form-active_button"}
        onClick={this.showModalDelete}>
        DELETE        
        </div> 
                   
      <FormDescriptionEdit onCloseFormEdit={this.closeModalEdit} showFormEdit={showFormEdit }/>
      <FormDelete onCloseFormDelete={this.closeModalDelete} showFormDelete={showFormDelete} />
      </div>
    )   
  }
}