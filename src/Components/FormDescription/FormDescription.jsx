import React, { Component } from "react";
import {createPortal} from "react-dom";

import "./FormDescription_css.css"

export default class FormDescription extends Component { 
  state = {
    name: "Crime",
    documentary: "Documentary",
    horror: "Horror",
    comedy: "Comedy"
  }  

  onClose = () => {
    this.props.onClose && this.props.onClose();
  };
  
  render() {
    const {onClose, show} = this.props
    if (!show) {
      return null;
    }    
    return createPortal  (       
      <div className="modal_window">  
          <span class="close" onClick={this.onClose}>
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
      ,     
      document.getElementById("root")      
    )
  }
}


