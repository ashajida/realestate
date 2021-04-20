import {
    FeaturedPropertiesSection,
    FeaturedPropertiesContainer,
    Heading,
    FeaturedPropertiesWrapper,
    PropertyImage,
    PropertyDecription,
    Icons,
    Icon,
    PropertyName,
    PropertyPrice,
    ImageWrapper

} from './FeaturedPropertiesElements';

import {Fragment} from 'react';
import Property from '../../Property/Property';

const FeaturedProperties = ({
    properties
}) => {
    return(
        <Fragment>
            <FeaturedPropertiesSection>
                <FeaturedPropertiesContainer>
                    <Heading>Featured Properties</Heading>
                    <FeaturedPropertiesWrapper>
                       {
                           properties.map((property) =>  property.ACF.is_featured &&  <Property key={ property.id } id={ property.id } property={property.ACF} />)
                       }
                    </FeaturedPropertiesWrapper>
                </FeaturedPropertiesContainer>
            </FeaturedPropertiesSection>
        </Fragment>
    );
}

export default FeaturedProperties; 