import styled from 'styled-components';
import { Container, Button } from '../../../globalstyles';


export const WhyChooseUsSection = styled.section`
    padding: 80px 0;
`; 

export const WhyChooseUsContainer = styled(Container)`  
    display: flex !important;
    flex-direction: column;
    @media screen and (min-width: 796px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;



export const ImageWrapper = styled.div`
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 30px;
    @media screen and (min-width: 796px) {
        width: 49%;
        margin-bottom: 0;
    }
`; 

export const WhyChooseUsImage = styled.img`   
    width: 100%;
    object-fit: cover;
    height: 100%;
    object-position: center;
`;


export const  Heading = styled.h2`
    font-size: 2rem;
    margin-bottom: 60px;
`; 

export const Description = styled.div`
    width: 100%;
    @media screen and (min-width: 796px) {
        width: 49%;
    }
`; 

export const  Btn = styled(Button)`
    ${Button}
`; 

export const  Text = styled.p`
    margin-bottom: 30px;
`; 
 
 


