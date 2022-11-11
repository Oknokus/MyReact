import React, {Component} from 'react';

export default class DescriptionOptions extends Component {
    render() {
        return (
            <div className={"description-options"}>
                <span className={"description__title"}>Sort by</span>
                <div className={"description-options__button"}>release by</div>
                <div className={"description-options__button"}>raiting</div>
            </div>
        );
    }
}