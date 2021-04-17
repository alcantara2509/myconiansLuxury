import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AdminLogin from './Components/Organisms/AdminLogin';
import {
  Home, Villas, VillaDetails, Wishlist, Yachts, Services, Events,
} from './Pages';
import MLProvider from './Context/MLProvider';

function App() {
  return (
    <div className="App">
      <MLProvider>
        <Switch>
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/yachts" component={Yachts} />
          <Route exact path="/villas" component={Villas} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/villas/:name" component={VillaDetails} />
          <Route exact path="/login" component={AdminLogin} />
          <Route exact path="/" component={Home} />
        </Switch>
      </MLProvider>
    </div>
  );
}

export default App;
