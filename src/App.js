import React from 'react';
import Home from './Home';
import NewProjet from './NewProjet';
import VueEnsemble from './VueEnsemble';
import Projet from './Projet';
import Profil from './Profil';
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
