import {React, Component} from "react";
import {MOCK_FILM} from "../Objects/FILMS"
import FilmListItem from "./FilmListItem";

import "./FilmList_css.css"

export default class filmList extends Component {
    handleClick = (film) => {
        const {getActiveFilm} = this.props;
        getActiveFilm(film)
    }

    isRenderFilms = (film) => {
        let content = [];
        MOCK_FILM.forEach(elem => { 
            const date = elem.date;
            const name = elem.name;
            const genre = elem.genre;
            const timeline = elem.timeline;
            const description = elem.description;
            const picture = elem.picture;
            const id = elem.id;
            const film = {date, name, genre , timeline, description, picture, id};
            
            content.push(
                <FilmListItem 
                activeFilmDescription= {()=>this.handleClick(film)}
                title={name} 
                date={date} 
                picture={picture}
                genre={genre}
                id={id}/>                                
            )
        })
        return content;
    }

    render() {
        return(
             
        <div  className="film-list">           
            {this.isRenderFilms()}
        </div>     
        )
    }
}




































