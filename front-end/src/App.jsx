import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HamburgerMenuComp from './Components/Atoms/HamburgerMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HamburgerMenuComp} />
      </Switch>
    </div>
  );
}

export default App;
