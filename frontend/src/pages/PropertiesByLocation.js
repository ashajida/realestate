import PropertiesByLocation from '../components/PropertiesByLocation';
import LocationsContext from '../provider/locationsProvider';
import { useParams } from 'react-router-dom';
import { useEffect, useContext, Fragment } from 'react';
import { getLocations } from '../actions/actions.locations';

const PropertiesByLocationPage = () => {

    const { locations, locationsDispatch } = useContext(LocationsContext);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        getLocations(locationsDispatch);
      }, [])

     
      
    return(
        <Fragment>
           { (locations.length > 0) && <PropertiesByLocation propertiesObj={ locations.filter( location => (location.id == id) && location ) }/>}
        </Fragment>
    );
}

export default PropertiesByLocationPage;