import {
    Property as PropertyWrapper,
    PropertyImage,
    PropertyDecription,
    Icons,
    Icon,
    PropertyName,
    PropertyPrice,
    ImageWrapper,
    PropertyContainer

} from '../Home/FeaturedProperties/FeaturedPropertiesElements';
import {FaBed} from 'react-icons/fa';
import {FaBath} from 'react-icons/fa';

const Property = ({property, id}) => {
    return (
        <PropertyContainer>
            <PropertyWrapper>
            <ImageWrapper>
                <PropertyImage src={property.image} />
            </ImageWrapper>
            <PropertyDecription>
            <PropertyName to={`/properties/${id}`}>{property.location}</PropertyName>
                <PropertyPrice>${property.price}/mo</PropertyPrice>
                <Icons>
                    <Icon><FaBed />{property.bedrooms}</Icon>
                    <Icon><FaBath />{property.bathrooms}</Icon>
                </Icons>
            </PropertyDecription>
            </PropertyWrapper>
         </PropertyContainer>
    );
}

export default Property;