import React from "react";

import { Component } from "react";

export default class ReactPureComponent extends Component {
    render() {
        const {children, className} = this.props;
    return(
        <div className={className}>
            {children}
        </div>
        )
    }
}