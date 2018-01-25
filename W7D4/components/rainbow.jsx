import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Indigo from './indigo';
import Orange from './orange';
import Yellow from './yellow';
import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        <NavLink exact to='/red' >Red</NavLink>
        <NavLink to='/red/orange' >Red & Orange</NavLink>
        <NavLink to='/red/yellow' >Red & Yellah</NavLink>
        <NavLink to='/green' >Greeeeens</NavLink>
        <NavLink exact to='/blue' >Bluuuuuu</NavLink>
        <NavLink to='/blue/indigo'>Blue & Indigo</NavLink>
        <NavLink exact to='/yellow'>Yellow</NavLink>
        <NavLink exact to='/violet'>Purple</NavLink>
        <NavLink to='/yellow/violet'>LAKESHOW</NavLink>
        <div id="rainbow">
          <Route path="/red" component={Red}/>
          <Route path="/red/orange" component={Orange}/>
          <Route path="/red/yellow" component={Yellow}/>
          <Route path="/green" component={Green}/>
          <Route path="/blue" component={Blue}/>
          <Route path="/blue/indigo" component={Indigo}/>
          <Route path="/violet" component={Violet}/>
          <Route path="/yellow/violet" component={Violet}/>
          <Route path="/yellow" component={Yellow}/>
        </div>
      </div>
    );
  }
}

export default Rainbow;
