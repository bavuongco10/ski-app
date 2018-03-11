import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home/Home.container';
import HeaderReact from '../../Components/HeaderReact/HeaderReact.component';

const App = () => (
  <div className="App">
    <HeaderReact />
    <main>
      <Route exact path="/" component={Home} />
    </main>
  </div>
);
export default App;
