import {Container, FormButton} from '../../../globalstyles';
import styled from 'styled-components';


export const FormSection = styled.section`
    padding: 200px 0;
`;

export const FormContainer = styled(Container)`
    ${Container}
`;

export const FormWrapper = styled.div`
    display: inline-block;
    max-width: 500px;
    width: 100%;
    @media screen and (min-width: 769px) {
        width: 50%;
    }
`;


export const InputWrapper = styled.div`
    display: block;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    padding: 10px 15px;
    display: inline-block;
    outline: none;
    border: none;
    font-size: 0.8rem;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    width: 100%;
`;

export const TextArea = styled.textarea`
    padding: 10px 15px;
    display: inline-block;
    outline: none;
    border: none;
    font-size: 0.8rem;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    width: 100%;
    height: 200px;
    font-family: inherit;
`;

export const Button = styled(FormButton)`
   margin-top: 0;
   display: inline-block;
   width: auto;
`;

export const FormHeading = styled.h2`
    margin-bottom: 30px;
    text-transform: uppercase;
    font-size: 2rem;
`;