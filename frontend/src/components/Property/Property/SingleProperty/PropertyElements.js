import styled from 'styled-components'
import { Container } from '../../../globalstyles';

export const PropertiesSection = styled.section`
    padding: 160px 0;
`;

export const PropertyContainer= styled(Container)`
    ${Container}
`;


export const PropertyWrapper = styled.div`
    width: 100%;

    @media screen and (min-width: 900px) {
        width: 50%;
    } 
`;

export const Image = styled.img`
    margin-bottom: 30px;
    width: 100%;
    object-fit: cover;
    @media screen and (min-width: 900px) {
        height: 500px;
    }
`;

export const Heading = styled.h2`
    margin-bottom: 30px;
    text-transform: uppercase;
`;

export const Property = styled.div`
`;

export const Content = styled.div`
    margin-bottom: 30px;
`;

export const Icons = styled.div`
    display:flex;
    flex-direction: row;
`;

export const Icon = styled.div`
    margin-right: 30px;

    svg {
        margin-right: 10px;
        color: #7158e2;
    }
`;

export const HeadingPriceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Price = styled.div`
    color: #7158e2;
    font-size: 1.5rem;
`;