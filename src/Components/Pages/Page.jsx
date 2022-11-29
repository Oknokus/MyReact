import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FilmDescription from '../FilmDescription/FilmDescription';
import Search from '../Search/Search';
import Description from '../Descriptions/Descriptions'
import FilmList from '../FilmList/FilmList';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './Page_css.css';

export default class Page extends Component {
    state = {
        activeFilm: null
    }

    setActiveFilm = (film) =>{
        this.setState({activeFilm: film})
    }

    resetActiveFilm = () =>{
        this.setState({activeFilm: null})
    }

    render(){
        const {activeFilm} = this.state

        return(
            <div className={"page"}>
                <Header isFilmSelected={activeFilm}  isFilmClose={this.resetActiveFilm}/>
                {activeFilm ? <FilmDescription kiryl1={activeFilm}/>: 
                <Search/>}
                <Description/>
                <FilmList getActiveFilm={this.setActiveFilm}/>
                <Footer/>
            </div>
        )
    }
}













