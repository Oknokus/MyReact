import React, {Component} from 'react';

import './Seach_css.css';


export default class Search extends Component {
    render() {
        const {searchActiveFilm} = this.props;
        return (
            <div className={"search"}>
                <span className={"search__title"}>FIND YOUR MOVIE</span>
                <input type="text" className={"search__input"}/>
                <div className={"search__options"}>
                    <div>
                        <span className={"search__options_title"}>SEARCH BY</span>
                        <div className={"search__options_button"}>TITLE</div>
                        <div className={"search__options_button"}>GENRE</div>
                    </div>
                    <div
                        onClick={searchActiveFilm}
                        className={"search-button"}>
                        SEARCH
                    </div>
                </div>
            </div>
        );
    }
}