import Properties from '../components/Buy/Buy';

import { Fragment, useContext, useState } from 'react';

import PropertiesContext from '../provider/propertyProvider';

import Buy from '../components/Buy/Buy';
import { useEffect } from 'react';
import { getProperties } from '../actions/actions.properties';

const BuyPage = () => {
    const { properties, propertiesDispatch } = useContext(PropertiesContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        getProperties(propertiesDispatch);
    }, []);

    return(
        <Fragment>
            <Buy propertiesObj={properties.filter(property => {
                if(property.ACF.type == 'buy') {
                    return property;
                }
            })}/> 
        </Fragment>
    )
}

export default BuyPage;