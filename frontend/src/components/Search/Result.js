import {
    ResultSection,
    ResultContainer,
    Heading,
} from './ResultElements';

import Properties from '../Property/Properties/Properties';


import { Fragment } from 'react';

import {useContext} from 'react';



const Result = ({properties}) => {

    return(
        <Fragment>
            <ResultSection>
                <ResultContainer>
                    {(properties.length == 0) ? <Heading>Not Found</Heading> : <Heading>Results</Heading>}
                    <Properties propertiesObj={properties} />
                </ResultContainer>
            </ResultSection>
        </Fragment>
    );
}

export default Result;