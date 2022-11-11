import React, {Component} from 'react';

export default class FilmListItem extends Component {

    render() {
        const {title, date, genre, setActiveFilm} = this.props;
        return (
            <div
                className={"film-list__item"}
                onClick={setActiveFilm}
            >
                <div className={"film-list__item_picture"}/>
                <div className={"film-list__item_info"}>
                    <span className={"item__title"}>{title}</span>
                    <span className={"item__date"}>{date}</span>
                    <span className={"item__category"}>{genre}</span>
                </div>
            </div>
        );
    }
}