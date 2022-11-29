import {React, Component} from "react";

import "./Header_css.css"

export default class Header extends Component {    
    render() {
        const {isFilmSelected, isFilmClose} = this.props;
        return (
            <div className={"header"}>
                <span className={"header-title"}>NetflixrouLette</span>
                {isFilmSelected &&
                <div
                onClick={isFilmClose}
                className={"search-button"}>  
                CLOSE            
                </div>                
                }
            </div>
        )        
    }
}















