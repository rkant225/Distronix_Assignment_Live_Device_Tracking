//Bays

//ParkingLot

import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions'; 

class Bay extends React.Component {
    constructor(props){
        super(props);

        this.bayRef = React.createRef();
    }

    // componentDidMount(){
    //     console.log(this.bayRef.current.clientHeight)
    //     this.bayRef.current.height = "100px";
    //     this.bayRef.current.width = "100px";
    // }

    getColor = (status) =>{
        return status ? "#66ff66" : "rgba(255,0,0,0.7)";
    }

    toggleStatus = (bayId)=>{
        this.props.toggleBayStatus(bayId)
    }

    render(){
        const {id, height, width, active} = this.props;
        return(
            <div className="bay" style={{height: `${height}px`, width : `${width}px`, backgroundColor : this.getColor(active)}} onClick={() => this.toggleStatus(id)}> 
                <div className="bay-name">
                    Bay {id}
                    <br/>
                    {active ? "Active" : "InActive"}
                </div>
            </div>
        );
    }
    
}

// const mapStateToPRops =(state)=>{
//     return{
//         lots : state.ParkingLotReducer.lots
//     }
// }

export default connect(null, {toggleBayStatus : Actions.toggleBayStatus})(Bay);