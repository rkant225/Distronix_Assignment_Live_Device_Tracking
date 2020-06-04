import axios from 'axios';

export const fetchParkingLots = (deviceId)=>{
    const URL = `http://34.71.252.163:5000/parking/lot/${deviceId}`
    return async (dispatch)=>{
        const response = await axios.get(URL);
        dispatch({type : "FETCH_LOTS", payload : response.data })
    }
}

export const toggleBayStatus =(bayId)=>{
    console.log('CHANGE_LOT_STATUS', bayId);
    const URL = `http://34.71.252.163:5000/parking/bay/${bayId}/toggle`;

    return async (dispatch)=>{
        const response = await axios.post(URL)
        dispatch({type: "CHANGE_LOT_STATUS", payload : response.data})
    }
}