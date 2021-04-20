import {
    Property as PropertyWrapper,
    PropertyImage,
    PropertyDecription,
    Icons,
    Icon,
    PropertyName,
    PropertyPrice,
    ImageWrapper,
} from '../Home/FeaturedProperties/FeaturedPropertiesElements';
import {FaBed} from 'react-icons/fa';
import {FaBath} from 'react-icons/fa';
import { PropertyContainer } from '../../Home/FeaturedProperties/FeaturedPropertiesElements';

const Property = ({property}) => {
    return (
        <PropertyContainer>
            <PropertyWrapper key={property.id}>
            <ImageWrapper>
                <PropertyImage src={property.ACF.image} />
            </ImageWrapper>
            <PropertyDecription>
            <PropertyName to={`/properties/${property.id}`}>{property.ACF.location}</PropertyName>
                <PropertyPrice>${property.ACF.price}/mo</PropertyPrice>
                <Icons>
                    <Icon><FaBed />{property.ACF.bedrooms}</Icon>
                    <Icon><FaBath />{property.ACF.bathrooms}</Icon>
                </Icons>
            </PropertyDecription>
            </PropertyWrapper>
         </PropertyContainer>
    );
}

export default Property;