//ParkingLot

import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions'; 
import Bay from './Bay';
import {Link} from 'react-router-dom';


class ParkingLot extends React.Component {
    componentDidMount(){
        const deviceId = this.props.match.params.deviceId;
        // remove this this is just for testing
        //const sampleDeviceID = '4d872a60f3f17a6a02a27fa72d303a34'

        this.props.fetchParkingLots(deviceId);
    }

    render(){
        const {lots} = this.props;
        return(
            <div>
                <h1>
                    <Link className="home-link" to="/">Home</Link>
                </h1>
                {lots.length > 0 ?
                    <div>
                        <div className="parking-lot-container">                    
                            {lots.map(lot =>{
                                return(
                                    <Bay key={lot.id} id={lot.id} width={lot.width} height={lot.height} active={lot.active}/>
                                );
                            })} 
                            <br/>  
                        </div>
                        <h5>Instruction : Click on "BAY" to toggle status.</h5>                 
                    </div>
              : <h1>No data Found...!!!, please enter valid device ID</h1>}
                
            </div>
        );
    }
    
}

const mapStateToPRops =(state)=>{
    return{
        lots : state.ParkingLotReducer.lots
    }
}

export default connect(mapStateToPRops, {fetchParkingLots : Actions.fetchParkingLots})(ParkingLot);