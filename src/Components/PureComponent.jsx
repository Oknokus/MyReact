import React, {Component} from "react";


export default class PureComponent extends Component {
    render() {
        const className = this.props;
        const children = this.props;
        const description = this.props;
        const descriptionTitle = this.props;
        return (
            <div className={className}>
                <span>
                    {children}
                </span>
                <span className={classNameDescription} >
                    {description}
                </span>                
            </div>

        )
    }
}
