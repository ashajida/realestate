import styled from 'styled-components'
import { Container, FormButton } from '../../../globalstyles';

export const HeroSection = styled.section`
    background-image: url(${({backgroundImage}) => backgroundImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh;
    display: block;
    position: relative;
`;

export const HeroContainer = styled(Container)`
    ${Container}
`;

export const Heading = styled.h1`
    font-size: 2.3rem;
    margin-bottom: 40px;
    color: #fff;
    line-height: 50px;
`;

export const FormContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    width: 100%;
    height: auto;
    display: inherit;
    max-width: 1140px;
    transform: translate(50%, -50%);
    padding: 15px;
`;

export const Form = styled.form`
    padding: 15px;
    background: blue;
    text-align: center;
    background-color: rgba(0,0,0,0.5);
    border: 1px solid transparent;
    border-radius: 10px;
    @media screen and (min-width: 769px) {
        height: 120px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;


export const InputWrapper = styled.div`
    display: block;
    margin-bottom: 20px;
    font-size: 1rem;
    @media screen and (min-width: 769px) {
        display: inline;
        margin-bottom: 0;
        margin-right: 10px;
        width: 100%;
    }
`;

export const Input = styled.input`
    padding: 10px 15px;
    display: inline-block;
    outline: none;
    border: none;
    font-size: 0.8rem;
    border: 1px solid transparent;
    border-radius: 10px;
    width: 100%;
    @media screen and (min-width: 769px) {
        display: inline;
        margin-bottom: 0;
        width: 100%;
    }
`;

export const Button = styled(FormButton)`
    

    @media screen and (min-width: 769px) {
        display: inline;
        margin-bottom: 0;
        width: auto;
    }
`;


