import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HamburgerMenuComp from './Components/Atoms/HamburgerMenu';
import './App.css';
import AdminLogin from './Components/Organisms/AdminLogin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HamburgerMenuComp} />
        <Route exact path="/login" component={AdminLogin} />
      </Switch>
    </div>
  );
}

export default App;
