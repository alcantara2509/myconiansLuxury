/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AdminLogin from './Components/Organisms/AdminLogin';
import {
  Home, Villas, VillaDetails, YachtDetails, Wishlist,
  Yachts, Services, Events, Weddings, Parties, Covid,
} from './Pages';
import MLProvider from './Context/MLProvider';
import ScrollToTop from './Utils/ScrollToTop';

function App() {
  useEffect(() => {
    const setLocalStorage = () => {
      const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
      if (!favoriteVillas) localStorage.setItem('favoriteVillas', JSON.stringify([]));
      const selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage'));
      if (!selectedLanguage) localStorage.setItem('selectedLanguage', JSON.stringify(''));
    };
    setLocalStorage();
  }, []);
  return (
    <div className="App">
      <MLProvider>
        <ScrollToTop>
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
        </ScrollToTop>
      </MLProvider>
    </div>
  );
}

export default App;
