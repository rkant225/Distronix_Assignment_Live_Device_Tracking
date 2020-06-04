import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form';
import ParkingLotReducer from './ParkingLotReducer';

export default combineReducers({
    form : formReducer,
    ParkingLotReducer : ParkingLotReducer
});