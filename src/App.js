import React from 'react';
import Home from './pages/Home';
import NewProjet from './pages/NewProjet';
import VueEnsemble from './pages/VueEnsemble';
import Projet from './pages/Projet';
import Profil from './pages/Profil';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/NewProjet" component={NewProjet} />
          <Route path="/VueEnsemble" component={VueEnsemble} />
          <Route path="/Projet" component={Projet} />
          <Route path="/Profil" component={Profil} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
