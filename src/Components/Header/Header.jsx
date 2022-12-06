import {React, Component} from "react";
import FormDescription from "../FormDescription/FormDescription"

import "./Header_css.css"

export default class Header extends Component { 
    state = {
        show: false,
      };
  
      showModal = () => {
        this.setState({
          show: true,
        })
      };
  
      closeModal = () => {
        this.setState({
          show: false,
        });
      }  
    render() {   
        const {show} = this.state
        const {isFilmSelected, isFilmClose} = this.props; 
                     
           return ( 
            <div         
              className={"header"}>
              <span className={"header-title"}>NetflixrouLette</span>              
              {isFilmSelected ?            
              <div
              onClick={isFilmClose}
              className={"add-button"}>  
              CLOSE            
              </div> :
              <div           
              className={"add-button"}             
              onClick={() => {
              this.showModal();              
              }}
              >+ ADD MOVIE            
              </div> 
            }            
            <FormDescription onClose={this.closeModal} show={show}/>                          
      </div>       
      )                   
    }
}















