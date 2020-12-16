import { GET_ACTIVITY, GET_ACTIVITY_SUCCESS, GET_ACTIVITY_ERROR } from "../actions/index";

export const initialState = {
    activity: null,
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ACTIVITY:
        return {
            ...state,
            isFetching: true,
            error: ""
        }
        case GET_ACTIVITY_SUCCESS:
            return {
                ...state,
                activity: action.payload,
                isFetching: false
            }
        case GET_ACTIVITY_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
  }
  