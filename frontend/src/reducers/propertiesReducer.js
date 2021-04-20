import { GET_PROPERTIES } from "../actions/actions.types";

const initialState = [];

const propertiesReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_PROPERTIES:
            return payload;
        default:
            return state;
    }
}

export default propertiesReducer;