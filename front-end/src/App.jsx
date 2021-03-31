import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AdminLogin from './Components/Organisms/AdminLogin';
import Villas from './Pages/Villas';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Villas} />
        <Route exact path="/login" component={AdminLogin} />
      </Switch>
    </div>
  );
}

export default App;
