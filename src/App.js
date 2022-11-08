import './App.css';
import React, {Component} from 'react';
import ReactComponent from './Components/Component';
import ReactFunctionalComponent from './Components/Component';
import PureComponent from './Components/Component';


export default class App extends Component {
  render () {
    const title  = "HE HE HE";
    const className = 'title';
    const descriptionTitle  = "description elem"
    const classNameDescription = "descriptionTitle";


    const children = (
      <span className={className}>
        {title}        
      </span>
    )
    const description = (
      <span className={classNameDescription}>
        {descriptionTitle}        
      </span>
    )
    return (
      <div className='App'>
        <ReactComponent>
            {children}
          </ReactComponent>

          <ReactFunctionalComponent>
            {description}
          </ReactFunctionalComponent>

          <PureComponent>
            {children}
          </PureComponent>

          {
            React.createElement('div', {className: className}, React.createElement('span',{} , description))
          }
        </div>

    )
  }
}



























































