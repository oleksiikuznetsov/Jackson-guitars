import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// Components
import HomePage from './components/HomePage/index';
import Support from './components/SupportPage/index';
import DealersPage from './components/DealersPage/index';
import CustomShop from './components/CustomShopPage/index';
import News from './components/NewsPage/index';
import Artists from './components/ArtistsPage/index';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/support' component={Support}/>
        <Route path='/dealers' component={DealersPage}/>
        <Route path='/customshop' component={CustomShop}/>
        <Route path='/news' component={News}/>
        <Route path='/artists' component={Artists}/>
      </Switch>
    </div>
  );
}

export default App;
