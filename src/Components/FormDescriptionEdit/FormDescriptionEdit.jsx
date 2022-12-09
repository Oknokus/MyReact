import React, { Component } from "react";
import ModalForm from "../ModalForm/ModalForm"


export default class FormDescriptionEdit extends Component { 
  state = {
    name: "Crime",
    documentary: "Documentary",
    horror: "Horror",
    comedy: "Comedy"
  }  

  onClose = () => {
    const {onCloseFormEdit} = this.props;
    onCloseFormEdit && onCloseFormEdit();
  };
  
  render() {
    const {showFormEdit} = this.props
        
    return <ModalForm showFormModal={showFormEdit} onClose={this.onClose} buttonText={"SAVE"} title={'EDIT MOVIE'}>
      <label for="ID">MOVIE ID</label><br/>           
            <input value={"ID-FILM-#"} className="inputIdForm" name="ID" type={'text'}/><br/> 
            <label for="TITLE">TITLE</label><br/>           
            <input className={"inputForm"} name="TITLE" type={'text'}/><br/> 
            <label for="RELEASE_DATE">RELEASE DATE</label><br/>              
            <input className={"inputForm"} name="RELEASE_DATE" type={'text'}/><br/> 
            <label for="MOVIE_URL">MOVIE URL</label><br/>              
            <input className={"inputForm"} name="MOVIE_URL" type={'text'}/><br/>  
            <label for="GENRI">GENRI</label><br/>      
            <select className={"selectForm"}> <br/>
             <option value="">Select Cenre</option>
              <option key={1} value="">{this.state.name}</option>
              <option key={2} value="">{this.state.documentary}</option>
              <option key={3} value="">{this.state.horror}</option>
              <option key={4} value="">{this.state.comedy}</option>
            </select>  <br/>
            <label for="OVERVIEW">OVERVIEW</label><br/>             
            <input className={"inputForm"} name="OVERVIEW" type={'text'}/><br/> 
            <label for="RUNTIME">RUNTIME</label><br/>               
            <input className={"inputForm"} name="RUNTIME" type={'text'}/><br/> 
          </ModalForm>       
            
}
}
