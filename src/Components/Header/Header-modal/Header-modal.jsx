import React, { Component } from "react";

import "../Header-modal/Header-modal_css.css"

export default class Modal extends Component { 
  state = {
    name: "Crime",
    documentary: "Documentary",
    horror: "Horror",
    comedy: "Comedy"
  }  

  closeModal = () => {   
    this.props.closeModal && this.props.closeModal();
  };
  
  render() {
    const {closeModal, isFilmAdd} = this.props;
    if (!this.props.isFilmAdd) {
      return null;
    }    
    return (       
      <div className="modal_window">  
          <span class="close" onClick={this.closeModal}>
            X
          </span>
          <h1 className="h1Form">ADD MOVIE</h1>
          <div className="formSame">
          <form className="formWindow" action="/action_page.php"><br/>          
            <label for="TITLE">TITLE</label><br/>           
            <input className="inputForm" name="TITLE" type={'text'}/><br/> 
            <label for="RELEASE_DATE">RELEASE DATE</label><br/>              
            <input className="inputForm" name="RELEASE_DATE" type={'text'}/><br/> 
            <label for="MOVIE_URL">MOVIE URL</label><br/>              
            <input className="inputForm" name="MOVIE_URL" type={'text'}/><br/>  
            <label for="GENRI">GENRI</label><br/>      
            <select className="selectForm"> <br/>
             <option value="">Select Cenre</option>
              <option key={1} value="">{this.state.name}</option>
              <option key={2} value="">{this.state.documentary}</option>
              <option key={3} value="">{this.state.horror}</option>
              <option key={4} value="">{this.state.comedy}</option>
            </select>  <br/>
            <label for="OVERVIEW">OVERVIEW</label><br/>             
            <input className="inputForm" name="OVERVIEW" type={'text'}/><br/> 
            <label for="RUNTIME">RUNTIME</label><br/>               
            <input className="inputForm" name="RUNTIME" type={'text'}/><br/> 
            <div className="buttons">
            <input className="resetButton" type={"reset"}value="Reset"/>     
            <input className="submitButton" type={"submit"} value="Submit"/>     
            </div>        
          </form>
          </div>
        </div>  
    )
  }
}


