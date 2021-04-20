import { Fragment } from "react";
import Property from '../components/Property/SingleProperty/Property';
import { useEffect } from "react";
import PropertiesContext from "../provider/propertyProvider";
import { useContext } from "react";
import { encode } from "base-64";
import { Header } from "../components/Navbar/NavbarElements";


const SingleProperty = ({match: { params }}) => {
    useEffect(() => {
        window.scrollTo(0, 0)

      }, []);

      let propertyObj = {};

      let cachedProperties = localStorage.getItem('properties');
      const {properties} = useContext(PropertiesContext);

      if(cachedProperties !== null) {
          cachedProperties = JSON.parse(cachedProperties);
            propertyObj = cachedProperties.filter((property) => property.id == params.id);
      } else {
        propertyObj = properties.filter((property) => property.id == params.id);
      }


    return(
        <Fragment>
            <Property propertyObj={propertyObj} />
        </Fragment>
    );
}

export default SingleProperty;
