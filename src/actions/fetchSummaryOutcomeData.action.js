import { FETCH_SUMMARY_MISSION_DATA } from "../constants/action-types"

export const fetchSummaryOutcomeData = () => {
    const arrayToDispatch = [];
    return { type: FETCH_SUMMARY_OUTCOME_DATA, payload: arrayToDispatch };
};
