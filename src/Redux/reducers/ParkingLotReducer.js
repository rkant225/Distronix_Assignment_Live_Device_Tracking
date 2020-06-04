const initialState = {lots : []}
const getUpdatedLots =(lots, updatedLot)=>{
    const finalUpdatedLots = [...lots];

    const indexToBeUpdated = lots.findIndex(x=> x.id === updatedLot.id);
    if(indexToBeUpdated > -1){
        finalUpdatedLots[indexToBeUpdated] = updatedLot;
    }
    return finalUpdatedLots;
}

const ParkingLotReducer = (state=initialState, action)=>{
    switch(action.type){
        case "FETCH_LOTS":
            return{
                ...state,
                lots : action.payload
            }
        case "CHANGE_LOT_STATUS":
            return{
                ...state,
                lots : [...getUpdatedLots(state.lots, action.payload)]
            }
        default:
            return state;
    }
}

export default ParkingLotReducer;