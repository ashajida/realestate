import { GET_PROPERTIES } from './actions.types';

export const getProperties = (dispatch) => {

    const cachedProperties = localStorage.getItem('properties');
    
    if(cachedProperties !== null) {

        const properties = JSON.parse(cachedProperties);

        return dispatch({
            type: GET_PROPERTIES, 
            payload: properties
        }) 
    } 

    fetch('/wp-json/wp/v2/properties')
    .then(response => response.json())
    .then(properties => {
        localStorage.setItem('properties', JSON.stringify(properties));
        dispatch({
            type: GET_PROPERTIES, 
            payload: properties
        }) 
    });
    
}

export const getBuyProperties = () => {

}


export const getRentProperties = () => {

}