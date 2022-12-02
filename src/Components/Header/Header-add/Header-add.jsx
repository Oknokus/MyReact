import {React, Component} from "react"
import Modal from "../Header-modal/Header-modal"

import "./Header-add_css.css"

  export default class HeaderAdd extends Component {    
    render() {
      const {isFilmAdd, closeModalForm} = this.props;
      return ( 
          <>
          <div
            className={"add-button"}         
            onClick={isFilmAdd}
          >+ ADD MOVIE            
          </div> 
          <Modal/>  
        </>        
      );
    }
  }