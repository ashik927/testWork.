import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Nothing from './components/Nothing/Nothing';
import MultipleImage from './components/MultipleImage/MultipleImage';
import Tshirt from './components/Tshirt/Tshirt';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/image">
          <MultipleImage></MultipleImage>
        </Route>
        <Route path="/tshirt">
          <Tshirt></Tshirt>
        </Route>
        <Route path="*">
          <Nothing></Nothing>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
