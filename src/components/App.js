import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './Home/Home';
import Map from './Map/Map';

function App() {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Route path="/" exact render={(props)=><Home {...props}/>}/>
        <Route path="/map/:deviceId/:sensorId" exact render={(props)=><Map {...props}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
