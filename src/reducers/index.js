import { FETCH_CURRENT_MISSION_DATA, FETCH_SUMMARY_MISSION_DATA } from "../constants/action-types";

const initialState = {
    currentMissionData: {},
    summaryMissionData: []
};

const rootReducer = (state = initialState, action) => {
    if (action.type === FETCH_CURRENT_MISSION_DATA) return {
        ...state,
        currentMissionData: ...action.payload
    } else if (action.type === FETCH_SUMMARY_MISSION_DATA) return {
        ...state,
        summaryMissionData: ...action.payload
    };
    return state;
};

export default rootReducer;
