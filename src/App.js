import React from 'react';
import { Route } from 'react-router-dom';
import TabNav from './components/TabNav';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import LocationCard from './components/LocationCard';
import EpisodesList from './components/EpisodesList';
import Episode from './components/Episode';

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' component={WelcomePage} />
    </main>
  );
}
    
//       <Route path='/characters-list' component={CharacterList} />
//       <Route path='/character' component={CharacterCard} />
//       <Route path='/locations-list' component={LocationsList} />
//       <Route path='/location' component={LocationCard} />
//       <Route path='/episodes-list' component={EpisodesList} />
//       <Route path='/episode' component={Episode} />