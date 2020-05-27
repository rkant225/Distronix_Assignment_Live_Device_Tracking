import React from 'react';
import GoogleMaps from './GoogleMaps';
import {Link} from 'react-router-dom';

const Map = (props)=>{
    console.log(props)

    // Extract the Device-ID and Sensor-ID from URL.
    const {deviceId, sensorId} = props.match.params;

    return(
        <div className="map-container">
            <GoogleMaps 
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDp-dmXFwL_w1dcUX2dp_znT4zYNB_yPCY" 
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                sensorId={sensorId}
                deviceId={deviceId}
            />
            <h1>
                <Link className="home-link" to="/">Home</Link>
            </h1>
        </div>
    );
}

export default Map;