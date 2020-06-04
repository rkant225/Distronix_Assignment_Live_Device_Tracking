import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';

import Home from './Home/Home';
import Map from './Map/Map';
import ParkingLot from './ParkingLot/ParkingLot';

function App() {
  return (
    <HashRouter>
      <div className="ui container">
        <Route path="/" exact render={(props)=><Home {...props}/>}/>
        {/* <Route path="/map/:deviceId/:sensorId" exact render={(props)=><Map {...props}/>}/> */}
        <Route path="/ParkingLot/:deviceId" exact render={(props)=> <ParkingLot {...props}/>}/>
      </div>
    </HashRouter>
  );
}

export default App;
