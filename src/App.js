import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import {RoutesHome} from './routes';

const ShowRouteHome = () =>{
  return(
    RoutesHome.map((item,index)=>{
      return(
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          component={item.component}
        />
      )
    })
  )
}

function App(){
  return(
    <Router>
      <Switch>
        {ShowRouteHome()}
      </Switch>
    </Router>
  )
}
export default App;
