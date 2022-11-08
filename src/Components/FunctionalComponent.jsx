import React from "react";

const ReactFunctionalComponent =  ({className, children}) => (
    <div className={className}> 
        {children}
    </div>
)

export default ReactFunctionalComponent;