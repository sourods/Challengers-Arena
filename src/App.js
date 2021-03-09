import React from 'react';
import { Switch, Route } from 'react-router-dom';
//providers
import { Player } from './core/actors/Player';
//view
import Header from './view/template/header';
import Home from './view/home';
import Arena from './view/arena';

function App() {

  return (
    <Player>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/arena" component={Arena} />
          {/* <Route component={e404}/> */}
        </Switch>
    </Player>
  );
}

export default App;
