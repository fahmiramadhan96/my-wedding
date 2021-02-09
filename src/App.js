import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import home from './containers/Home'
import About from './containers/About'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
