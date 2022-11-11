import React, {Component} from 'react';
import FilmListItem from './FilmListItem';
import {MOCK_FILM} from '../Objects/FILMS';
import './FilmList_css.css';

export default class FilmList extends Component {

    renderFilms = () => {
        const {setActiveFilm} = this.props;
        let content = [];

        for (let i = 0; i < 24; i++) {
            const name = `${MOCK_FILM.name} ${i}`;
            const date = MOCK_FILM.date + i;
            const genre = `${MOCK_FILM.genre} ${i}`;
            const timeline = MOCK_FILM.timeline + i;
            const film = {name, date, genre, timeline, description: MOCK_FILM.description};

            content.push(
                <FilmListItem title={name} date={date}
                              genre={genre}
                              setActiveFilm={() => setActiveFilm(film)}/>
            );
        }
        return content;

    }


    render() {
        return (
            <div className={"film-list"}>
                {this.renderFilms()}
            </div>
        );
    }
}