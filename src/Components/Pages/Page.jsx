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
    };

    setActiveFilm = (film) => {
        this.setState({activeFilm: film});
    }

    resetActiveFilm = () => {
        this.setState({activeFilm: null});
    }

    render() {
        const {activeFilm} = this.state;

        return (
            <div className={"page"}>                       
                    <Header isFilmSelected={activeFilm} resetActiveFilm={this.resetActiveFilm}/>
                    {activeFilm ? <FilmDescription activeFilm={activeFilm}/> : 
                        <Search/>}
                        <Description/>                      
                        {/* <FilmList setActiveFilm={this.setActiveFilm}/>  */}
                        <Footer/>                 
            </div>
        );
    }

}