import Result from '../components/Search/Result'
import { Fragment, useContext } from 'react';

import PropertiesContext from '../provider/propertyProvider';
import { useEffect } from 'react';
import { getProperties } from '../actions/actions.properties';

const Search = () => {

    const { properties, propertiesDispatch } = useContext(PropertiesContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        getProperties(propertiesDispatch);
      }, [])

      let queryString = new URLSearchParams(window.location.search);
      queryString = queryString.get('s').toLowerCase();
  
      const propertiesObj = properties.filter(property => {
          const name = property.ACF.name;
          const regex = new RegExp(queryString.toLowerCase());
  
          if(name.toLowerCase().match(regex)) {
              return property;
          }
      })


    return(
        <Fragment>
            <Result properties={propertiesObj}/>
        </Fragment>
    )
}

export default Search;