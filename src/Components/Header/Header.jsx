import {React, Component} from "react";

import "../Header/Header_css.css"

export default class Header extends Component {
    render() {
        const {isFilmSelected, resetActiveFilm} = this.props;
        return(
            <div className={"header"}>
                <span className={"header-title"}>NetflixrouLette</span>
                {isFilmSelected &&
                <div 
                onClick={resetActiveFilm}
                className={"search-button"}>
                    CLOSE
                </div>
                }
            </div>
        )
    }
}




























