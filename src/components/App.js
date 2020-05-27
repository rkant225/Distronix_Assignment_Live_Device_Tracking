import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './Home/Home';
import Map from './Map/Map';

function App() {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Route path="Distronix_Assignment_Live_Device_Tracking/" exact render={(props)=><Home {...props}/>}/>
        <Route path="Distronix_Assignment_Live_Device_Tracking/map/:deviceId/:sensorId" exact render={(props)=><Map {...props}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
