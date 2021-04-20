import {
    Section,
    PropertiesContainer,
    Heading,
} from './PropertiesByLocationElements';

import Properties from '../Property/Properties/Properties';

import { Fragment } from 'react';

const PropertiesByLocation = ({propertiesObj}) => {
    return(
        <Fragment>
            <Section>
                <PropertiesContainer>
                    {(propertiesObj[0]['properties'].length == 0) ? <Heading>Not Found</Heading> : <Heading>{propertiesObj[0].name}</Heading>}
                    <Properties propertiesObj={ propertiesObj[0]['properties'] }/> 
                </PropertiesContainer>
            </Section>
        </Fragment>
    );
}

export default PropertiesByLocation;