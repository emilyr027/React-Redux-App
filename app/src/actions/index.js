import axios from "axios";

export const GET_ACTIVITY = "GET_ACTIVITY";
export const GET_ACTIVITY_SUCCESS = "GET_ACTIVITY_SUCCESS";
export const GET_ACTIVITY_ERROR = "GET_ACTIVITY_ERROR";

export default function getActivity () {
    return dispatch => {
        dispatch({ type: GET_ACTIVITY })

        axios.get("http://www.boredapi.com/api/activity/")
            .then(res => {
                dispatch({ type: GET_ACTIVITY_SUCCESS, payload: res.data.activity })
            })
            .catch(err => {
                dispatch({ type: GET_ACTIVITY_ERROR, payload: err.response })
            });
    };
}
