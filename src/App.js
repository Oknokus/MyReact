import './App.css';
import React, {Component} from 'react';
import ReactComponent from './Components/Component';
import ReactFunctionalComponent from './Components/Component';
import ReactPureComponent from './Components/Component';


export default class App extends Component {
  render() {
    const title = "Hello My World"
    const className = "title"
    const children = (
      <span>
        {title}
      </span>
    )    
   

  return (
    <div className="App">
    <ReactComponent className={className}>
      {children}
    </ReactComponent>

    <ReactFunctionalComponent className={className}>
      {children}
    </ReactFunctionalComponent>

    <ReactPureComponent className={className}>
      {children}
    </ReactPureComponent>
    {
      
    React.createElement('div', {className: className}, React.createElement('span', {}, title)) }
    </div>    
  )
};
}




