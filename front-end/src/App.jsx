import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AdminLogin from './Components/Organisms/AdminLogin';
import { Home, Villas, VillaDetails } from './Pages';
import MLProvider from './Context/MLProvider';

function App() {
  return (
    <div className="App">
      <MLProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/villas" component={Villas} />
          <Route exact path="/villas/:name" component={VillaDetails} />
          <Route exact path="/login" component={AdminLogin} />
        </Switch>
      </MLProvider>
    </div>
  );
}

export default App;
