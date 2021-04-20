import { Fragment } from 'react';
import {
    Section,
    Container,
    Wrapper,
    Links,
    Link,
    Heading
} from './NoMatch.elements'

const NoMatch = () => {
    return (
        <Fragment>
            <Section>
               <Container>
                   <Wrapper>
                       <Links>
                            <Link to='/'>Home</Link>
                            <Link to='/rent'>Rent</Link>
                            <Link to='/buy'>Buy</Link>
                       </Links>
                       <Heading>404 / Page Not Found</Heading>
                   </Wrapper>
                </Container> 
            </Section>
        </Fragment>
    )
}

export default NoMatch;