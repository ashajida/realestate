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
    PropertyWrapper,
    Agent,
    Name,
    ContactLink,
    AgentHeading,
    AgentImage,
    Wrapper,
     } from "./PropertyElements";
import { useContext } from "react";
import PropertiesContext from "../../../provider/propertyProvider";
import {FaBed, FaBath} from 'react-icons/fa';
import { FiMail, FiPhone } from "react-icons/fi";



const Property = ({propertyObj}) => {
 
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
                        <Content dangerouslySetInnerHTML={{__html: propertyObj[0].ACF.content}}></Content>
                        <Icons>
                            <Icon><FaBed />{propertyObj[0].ACF.bedrooms}</Icon>
                            <Icon><FaBath/>{propertyObj[0].ACF.bathrooms}</Icon>
                        </Icons>
                        <Agent>
                            <AgentHeading>Agent information</AgentHeading>
                            <AgentImage dangerouslySetInnerHTML={{__html: propertyObj[0].ACF.agent.user_avatar}}></AgentImage>
                            
                            <Name>{propertyObj[0].ACF.agent.display_name}</Name>
                            <Wrapper>
                                    <Icon><FiMail/></Icon>
                                 <ContactLink href={`mailto: ${propertyObj[0].ACF.agent.user_email}`}>{propertyObj[0].ACF.agent.user_email}</ContactLink>
                            </Wrapper>
                            <Wrapper>
                                    <Icon><FiPhone/></Icon>
                                 <ContactLink href={`tel: 000-000-000`}>000-000-000</ContactLink>
                            </Wrapper>
                        </Agent>
                    </PropertyWrapper>
                </PropertyContainer>
            </PropertiesSection>
        </Fragment>
    );
}

export default Property;