import React, { Component } from 'react'
import FilmListItem from '../FilmList/FilmListItem';


import "./IsFormMenu_css.css"

export class IsFormMenu extends Component {
  handleClick = (menu) => {
    const {setActiveFormMenu} = this.props;
    setActiveFormMenu(menu)
}

isRenderFormMenu = (menu) => {
  let content = [];
          
        const name = "Edit";
        const nameDel = "Delete";       
        const menu = {name, nameDel };

        content.push(
            <FilmListItem 
            activeFormMenu= {()=>this.handleClick(menu)}
            name={name} 
            nameDel={nameDel} />                       
        )   
    return content;
}

render() {
    return(         
    <div  className="form-list">           
        {this.isRenderFormMenu()}
    </div>     
    )
}
}

