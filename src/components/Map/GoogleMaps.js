import React, { useState } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import axios from 'axios'; // used to fecth data from remote API

class GoogleMaps extends React.Component{
    state={isMarkerClicked : false, lat : 20, lng : 40}

    // Update location of device every 5 seconds.
    componentDidMount(){
        this.locationUpdateTimer = setInterval(()=>this.updateCurrentLocation(),5000)
    }

    // Clear the timer once component is being unmounted.
    componentWillUnmount(){
        clearInterval(this.locationUpdateTimer)
    }

    // this function will fetch data from given end point, 
    // currently API is not working so updating location with Random value every 5 seconds.
    updateCurrentLocation =async ()=>{
        //const response = await (await axios.get('http://35.197.106.255:3000/api/v1.1/lastMultiple', {Type: "x-www-form-urlencoded", Key: "devid", Value: "4d872a60f3f17a6a02a27fa72d303a34"})).data;
        // this.setState({
        //     lat : response.lat, 
        //     lng : response.lng
        // })

        this.setState({
            lat : Math.random() * 100, 
            lng : Math.random() * 100
        })
    }

    render(){
        const {isMarkerClicked, lat, lng} = this.state;

        return(
            <div>
                <GoogleMap defaultZoom={3} defaultCenter={{lat : lat, lng : lng}} center={{lat : lat, lng : lng}}>
                        <Marker position={{lat : lat, lng : lng}} onClick={()=>this.setState({isMarkerClicked : true})}/>
                        {isMarkerClicked && 
                            <InfoWindow position={{lat : lat, lng : lng}} onCloseClick={()=>this.setState({isMarkerClicked : false})}>
                                <div>
                                    Device Name : {lat}
                                    <br/>
                                    Sensor Name : {lng}
                                </div>
                            </InfoWindow>
                        }
                </GoogleMap>
            </div>
        );
    }
}

export default withScriptjs(withGoogleMap(GoogleMaps));