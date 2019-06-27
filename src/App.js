import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FirebaseProvider from './Firebase/FirebaseProvider';
import Home from './pages/Home';
import NewProjet from './pages/NewProjet';
import VueEnsemble from './pages/VueEnsemble';
import Projet from './pages/Projet';
import Profil from './pages/Profil';
import CreationProfile from './pages/CreationProfile';


function App() {
  return (
    <div className="App">
      <FirebaseProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/NewProjet" component={NewProjet} />
            <Route path="/VueEnsemble" component={VueEnsemble} />
            <Route path="/Projet" component={Projet} />
            <Route path="/Profil" component={Profil} />
            <Route path="/CreationProfile" component={CreationProfile} />
          </Switch>
        </BrowserRouter>
      </FirebaseProvider>
    </div>
  );
}

export default App;
