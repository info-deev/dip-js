import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import {Provider} from 'react-redux';

import Routes from './Routes';
import Dashboard from './containers/dashboard';
import { store } from './store';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Dashboard></Dashboard>
          <Switch>
            {Routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>      
      </BrowserRouter>
    </Provider>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
