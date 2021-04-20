import { Fragment, useContext } from 'react';

import PropertiesContext from '../provider/propertyProvider';

import Rent from '../components/Rent/Rent';
import { useEffect } from 'react';
import { getProperties } from '../actions/actions.properties';

const RentPage = () => {

    const { properties, propertiesDispatch } = useContext(PropertiesContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        getProperties(propertiesDispatch);
    }, []);

    return(
        <Fragment>
            <Rent propertiesObj={properties.filter(property => {
                if(property.ACF.type == 'rent') {
                    return property;
                }
            })}/>
        </Fragment>
    )
}

export default RentPage;