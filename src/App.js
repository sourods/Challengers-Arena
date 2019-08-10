import React from 'react';
import { Switch, Route } from 'react-router-dom';
//view
import CharacterSelection from './view/character_selection';
import Arena from './view/arena';

function App() {

  return (
    <Switch>
      <Route path="/" exact component={CharacterSelection} />
      <Route path="/arena" component={Arena} />
      {/* <Route component={e404}/> */}
    </Switch>
  );
}

export default App;
