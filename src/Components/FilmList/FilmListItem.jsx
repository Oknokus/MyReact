import React, {Component} from 'react';
import FormMenuActive from "../IsFormMenu/FormMenuActive"

export default class FilmListItem extends Component {
    state = {
        activeFormMenu: false,       
    };

    setActiveFormMenu = () => {
        this.setState({
            activeFormMenu: true,
        })
    };

    resetActiveFormMenu = () => {
        this.setState({         
           activeFormMenu: false,
        })
      }  

    render() {             
        const {activeFormMenu} = this.state;
        const {title, date, genre, activeFilmDescription, picture, id} = this.props;
        return (
            <div>
            <div
                key={id}
                className={"film-list__item"}
                onClick={activeFilmDescription}
            >            
                <div className={"film-list__item_picture"}> 
              
                <img className={'film-list__item_picture'} src={picture}
                 alt={""}/>
                </div> 
               
                <div className={"film-list__item_info"}>
                    <span className={"item__title"}>{title}</span>                    
                    <span className={"item__date"}>{date}</span>
                    <span className={"item__category"}>{genre}</span>
                </div>
   
            </div>

            <div            
             className={'film-list__item_button'}             
            > 
             <div
              onClick={this.setActiveFormMenu} >                 
             <span className={'film-list__item_span'}></span>
             <span className={'film-list__item_span'}></span>
             <span className={'film-list__item_span'}></span>
             </div>                            
            <FormMenuActive fucnOnCloseForm={this.resetActiveFormMenu} funcActiveFormMenu={activeFormMenu}/>
            </div>
         </div>
        );
    }
}