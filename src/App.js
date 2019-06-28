import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewProjet from './pages/NewProjet/NewProjet';
import VueEnsemble from './pages/VueEnsemble/VueEnsemble';
import Projet from './pages/Projet/Projet';
import Profil from './pages/Profil/Profil';
import CreationProfile from './pages/CreationProfil/CreationProfile';
import Guide from './pages/Guide/Guide';
import NavBar from './pages/NavBar';


function App() {
  return (
    <div className="App" style={{ paddingBottom: '20%' }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/NewProjet" component={NewProjet} />
          <Route path="/VueEnsemble" component={VueEnsemble} />
          <Route path="/Projet" component={Projet} />
          <Route path="/Profil" component={Profil} />
          <Route path="/CreationProfile" component={CreationProfile} />
          <Route path="/Guide" component={Guide} />
        </Switch>
        <NavBar />
      </BrowserRouter>

    </div>
  );
}

export default App;
