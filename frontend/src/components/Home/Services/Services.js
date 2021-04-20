
import {Fragment} from 'react';
import { 
    Heading,
    Service,
    ServiceDecription,
    ServicesContainer,
    ServiceName,
    ServicesWrapper,
    Heading,
    Icon,
 } from './ServicesElements';

export const Services = () => {
    return(
        <Fragment>
            <ServicesSection>
                <ServicesContainer>
                    <Heading>Services We Provide</Heading>
                    <ServicesWrapper>
                        <Service>
                            <Icon></Icon>
                            <ServiceName></ServiceName>
                            <ServiceDecription></ServiceDecription>
                        </Service>
                    </ServicesWrapper>
                </ServicesContainer>
            </ServicesSection>
        </Fragment>
    );
}