import { FETCH_CURRENT_MISSION_DATA } from "../constants/action-types"

export const fetchCurrentMissionData = () => {
    const objectToDispatch = {};
    return { type: FETCH_CURRENT_MISSION_DATA, payload: objectToDispatch };
};
