import { GET_LOCATIONS } from './actions.types';

export const getLocations = (dispatch) => {

    const cachedLocations = localStorage.getItem('locations');

    if(cachedLocations !== null) {
        const locations = JSON.parse(cachedLocations);

        return dispatch({
            type: GET_LOCATIONS,
            payload: locations
        });
    } 

    fetch('/wp-json/wp/v2/categories?per_page=3')
    .then(response => response.json())
    .then(locations => {
        localStorage.setItem('locations', JSON.stringify(locations));
        
        dispatch({
            type: GET_LOCATIONS,
            payload: locations
        });
    });
        

}