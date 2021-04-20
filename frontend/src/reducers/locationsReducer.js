import { GET_LOCATIONS } from '../actions/actions.types';

const initialState = [];

const locationsReducer = (state = initialState, { type, payload } ) => {
    switch(type) {
        case GET_LOCATIONS:
            return payload;
        default:
            return state;
    }
}

export default locationsReducer;