import React from "react";
import { Component } from "react";
import "./Header_css.css"

export default class Header extends Component {
    render() {
        const {isFilmSelected, resetActiveFilm} = this.props;

        return(
            <div className={"header"}>
                <span className={"header-title"}>netflixroulette</span>
                {isFilmSelected &&
                <div
                    onClick={resetActiveFilm}
                    className={"searh-button"}>
                        SEARCH
                </div>
                }
            </div>
        )
    }
}