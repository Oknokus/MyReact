import React from "react";
import { Component } from "react";

export default class ReactComponent extends Component {
    render () {
        const {className, children} = this.props;
        return (
            <div className={className}>
                <span>
                    {children}
                </span>
            </div>
        )
    }
}



