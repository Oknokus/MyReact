import React, {Component} from 'react';
import DescriptionOptions from './DescriptionOptions';
import './Descriptions_css.css';

export default class Description extends Component {
    render() {
        const {isShownOptions} = this.props;
        return (
            <div className={"description"}>
                <span className={"description__title"}>title</span>
                {true && <DescriptionOptions/>}
            </div>
        );
    }
}