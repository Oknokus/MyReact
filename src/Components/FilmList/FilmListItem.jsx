import React, {Component} from 'react';
import {MOCK_FILM} from "../Objects/FILMS" 

export default class FilmListItem extends Component {
    render() {
        const {title, date, genre, activeFilmDescription, picture} = this.props;
        return (
            
            <div
                className={"film-list__item"}
                onClick={activeFilmDescription}
            >            
                <div className={"film-list__item_picture"}> 
              
                <img className='film-list__item_picture' src={picture}
                 alt="photo"/>    
                </div> 
                <div className={"film-list__item_info"}>
                    <span className={"item__title"}>{title}</span>                    
                    <span className={"item__date"}>{date}</span>
                    <span className={"item__category"}>{genre}</span>
                </div>
   
            </div>
                 
        );
    }
}