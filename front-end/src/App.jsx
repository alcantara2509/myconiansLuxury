import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AdminLogin from './Components/Organisms/AdminLogin';
import {
  Home, Villas, VillaDetails, YachtDetails, Wishlist,
  Yachts, Services, Events, Weddings, Parties, Covid,
} from './Pages';
import MLProvider from './Context/MLProvider';

function App() {
  return (
    <div className="App">
      <MLProvider>
        <Switch>
          <Route exact path="/measures" component={Covid} />
          <Route exact path="/weddings" component={Weddings} />
          <Route exact path="/parties" component={Parties} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/yachts" component={Yachts} />
          <Route exact path="/villas" component={Villas} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/villas/:name" component={VillaDetails} />
          <Route exact path="/yachts/:name" component={YachtDetails} />
          <Route exact path="/login" component={AdminLogin} />
          <Route exact path="/" component={Home} />
        </Switch>
      </MLProvider>
    </div>
  );
}

export default App;
