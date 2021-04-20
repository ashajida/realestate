import Hero from '../components/Home/Hero/Hero';
import PopularLocations from '../components/Home/PopularLocations/PopularLocations';
import {Fragment} from 'react';
import FeaturedProperties from '../components/Home/FeaturedProperties/FeatureProperties';
import {WhyChooseUsObj} from '../components/Home/WhyChooseUs/Data';
import WhyChooseUs from '../components/Home/WhyChooseUs/WhyChooseUs';
import {useEffect, useContext} from 'react';
import PropertiesContext from '../provider/propertyProvider';
import LocationsContext from '../provider/locationsProvider';
import { getProperties } from '../actions/actions.properties';
import { getLocations } from '../actions/actions.locations';

const Home = () => {
    const { properties, propertiesDispatch } = useContext(PropertiesContext);
    const { locations, locationsDispatch } = useContext(LocationsContext);

    useEffect(() => {
        window.scrollTo(0, 0)
        getProperties(propertiesDispatch);
        getLocations(locationsDispatch);
      }, [])
    
   

    return(
        <Fragment>
            <Hero />
            {(locations.length > 0) && <PopularLocations locations={locations} />}
           {(properties.length > 0) &&  <FeaturedProperties properties={properties}/> }
            <WhyChooseUs {...WhyChooseUsObj}/>
        </Fragment>
    );
}

export default Home;