import {Container} from '../../../globalstyles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const FeaturedPropertiesSection = styled.section`
    padding: 80px 0;
    background: #e8e8e8;
`;

export const  FeaturedPropertiesContainer = styled(Container)`
    ${Container}
`;

export const Heading = styled.h2`
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 60px;
    line-height: 50px;
`;

export const FeaturedPropertiesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 769px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }    
`;



export const PropertyContainer = styled.div`

    margin-bottom: 30px;
    width: 100%;
    &:last-of-type {
        margin-right: auto;
    }

    @media screen and (min-width: 769px) {
        width: 33.333%;
        padding: 0.5rem; 
    }

    @media screen and (min-width:920px) {
        width: 25%;
    }
    
`;



export const Property = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid transparent;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    background: #fff;
`;


export const ImageWrapper = styled.div`
    width: 100%;
    height: 260px;
    overflow: hidden;
    margin-bottom: 30px;
`;


export const PropertyImage = styled.img`
    width: 100%;
    object-fit: cover;
    height: 100%;  
    object-position: center;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.5);
    }
`;

export const  PropertyDecription = styled.div`
    padding: 15px;
 `;

export const Icons = styled.div`
    display: flex;
 `;


export const Icon = styled.div`
    font-size: 1rem;
    display: flex;
    align-items: baseline;
    margin-right: 20px;
    svg {
        color: #7158e2;
        margin-right: 10px;
    }
`;

export const PropertyName = styled(Link)`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 30px;
    color: #000;
    text-decoration: none;
    &:hover {
        color: #7158e2;
    }
`;


export const PropertyPrice = styled.div`
    font-size: 1.2rem;
    margin-bottom: 20px;
    margin-top: 20px;
`;
