import styled from 'styled-components';
import { Container } from '../../../globalstyles';
import { Link } from 'react-router-dom';

export const PopularLocationsSection = styled.section`
    padding: 80px 0;
`;

export const PopularLocationsContainer = styled(Container)`
    ${Container}
`;

export const Heading = styled.h2`
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 50px;
    line-height: 50px;
`;

export const PopularLocationsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 769px){
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    } 

    @media screen and (min-width: 920px){
        flex-direction: row;
        justify-content: space-between;
    } 

`;

export const PopularLocation = styled.div`
    width: 100%;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 10px;
    margin-bottom: 30px;
    display: block;
    position: relative;


    @media screen and (min-width:769px) {
        width: 49%;
        display: inline-block;
        padding: 0;
        margin-bottom: 0;
      
        ${({big}) => {
            if(big) {
                return `
                    width: 100%;
                    height: 100%;
                `;
            }
        }}
    }

    @media screen and (min-width:920px) {
        width: 24%;
        display: inline-block;
        padding: 0;
        margin-bottom: 0;
      
        ${({big}) => {
            if(big) {
                return `
                    width: 48%;
                    height: 460px;
                `;
            }
        }}
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    Object-fit: cover;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.5);
    }
`;


export const LocationName = styled(Link)`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    display: block;
    text-decoration: none;
    color: #fff;
    &:hover {
        color: #7158e2;
    }
`;


export const PropertyCount = styled.h3`
    font-size: 1.2rem;
`;

export const DescriptionWrapper = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    color: #fff;
    padding: 0 15px;
    padding-bottom: 30px;
`;




