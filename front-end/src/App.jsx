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
          <Route exact path="/villas" component={Villas} />
          <Route path="/villas/:name" component={VillaDetails} />
          <Route path="/login" component={AdminLogin} />
          <Route exact path="/" component={Home} />
        </Switch>
      </MLProvider>
    </div>
  );
}

export default App;
