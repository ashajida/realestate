import {Properties as PropertiesWrapper} from './PropertiesElements';
import Property from '../Property';
import { PropertyContainer } from '../../Home/FeaturedProperties/FeaturedPropertiesElements';


const Properties = ({propertiesObj}) => {
    return(
        <PropertiesWrapper>
              {
                propertiesObj.map(property => {
                    console.log(property);
                    return(
                        <Property key={property.id} id={ property.id } property={property.ACF} />
                    );
                })
            }
        </PropertiesWrapper>

    );
}

export default Properties;