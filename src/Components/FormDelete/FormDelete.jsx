import React, { Component } from 'react'
import ModalForm from "../ModalForm/ModalForm"


export default class FormDelete extends Component { 
  onClose = () => {
    const {onCloseFormDelete} = this.props;
    onCloseFormDelete && onCloseFormDelete()        
    }  
    
  render()  {
    const {showFormDelete} = this.props;

    return <ModalForm title={'Delete Movie'}  showFormModal={showFormDelete} onClose={this.onClose} buttonText={"CONFIRM"} >
      <input className={"inputFormDelete"} placeholder={"Are you sure you want to delete this movie?"} name="TITLE" type={'text'}/><br/> 
       </ModalForm>       
       }
      }
    