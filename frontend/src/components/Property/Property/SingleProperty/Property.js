import { Fragment, useEffect } from "react";
import { 
    PropertiesSection, 
    PropertyContainer, 
    Heading, 
    Image, 
    Content, 
    Icons,
    Icon,
    HeadingPriceWrapper,
    Price,
    PropertyWrapper
     } from "./PropertyElements";
import { useContext } from "react";
import PropertiesContext from "../../../provider/propertyProvider";
import {FaBed, FaBath} from 'react-icons/fa';



const Property = ({id}) => {
    const {properties} = useContext(PropertiesContext);

    const propertyObj = properties.filter((property) => property.id == id);

    return(
        <Fragment>
            <PropertiesSection>
                <PropertyContainer>
                    <PropertyWrapper>
                        <HeadingPriceWrapper>
                            <Heading>{propertyObj[0].ACF.name}</Heading>
                            <Price>&pound;{propertyObj[0].ACF.price}/mo</Price>
                        </HeadingPriceWrapper>
                        <Image src={propertyObj[0].ACF.image} />
                        <Content>{propertyObj[0].ACF.content}</Content>
                        <Icons>
                            <Icon><FaBed />{propertyObj[0].ACF.bedrooms}</Icon>
                            <Icon><FaBath/>{propertyObj[0].ACF.bathrooms}</Icon>
                        </Icons>
                    </PropertyWrapper>
                </PropertyContainer>
            </PropertiesSection>
        </Fragment>
    );
}

export default Property;