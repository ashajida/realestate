
import {Container, FormButton} from '../../globalstyles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Logo} from '../Navbar/NavbarElements';

export const FooterSection = styled.footer`
    padding: 80px 0;
    background: #000;
    margin-top: auto;
`;


export const  FooterContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @media screen and (min-width: 769px) {
        flex-direction: row;
    }

    @media screen and (min-width: 900px) {
        justify-content: space-between;
    }
`;


export const NavLink = styled(Link)`
    color: #fff;
    margin-bottom: 20px;
    &:hover {
        color: #7158e2;
    }
`;


export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    @media screen and (min-width: 769px) {
        width: 50%;
    }

    @media screen and (min-width: 900px) {
        width: auto;
        margin-bottom: 0;
    }
`;

export const NavHeading = styled.h3`
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #fff;
`;


export const Socials = styled.div`
    display: flex;
    flex-direction: row;
`;


export const Icon = styled.div`
    color: #fff;
    margin-bottom: 20px;
    svg {
        color: #7158e2;
        margin-right: 10px;
    }
`;


export const Form = styled.form`
    width: auto;
    @media screen and (min-width: 769px) {
        width: 100%;
    }

    @media screen and (min-width: 900px) {
        width: 30%;
        margin-bottom: 0;
    }

`;

export const InputWrapper = styled.div`
    display: block;
    margin-bottom: 20px;
    width: 100%;
`;

export const Input = styled.input`
    padding: 10px 15px;
    display: inline-block;
    outline: none;
    font-size: 0.8rem;
    border-radius: 0;
    border: none;
    width: 100%;
    margin-bottom: 20px;
    @media screen and (min-width: 900px) {
        margin-bottom: 0;
    }
`;

export const Button = styled(FormButton)`
    outline: none;
    background: #7158e2;
    padding: 10px 15px;
    font-size: 1rem;
    color: #fff;
    width: 100%;
    display: block;
    border: none;
    border-radius: 0;
    cursor: pointer;
    font-weight: bold;
`;


export const Heading = styled.h3`
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 20px;
`;


export const LogoSocialWrapper = styled.div`
    width: auto;
    margin-bottom: 30px;
    @media screen and (min-width: 769px) {
        width: 100%;
    }

    @media screen and (min-width: 900px) {
        width: 35%;
        margin-bottom: 0;
    }
`;

export const FooterLogo = styled(Logo)`
    margin-bottom: 30px;
     
`;

export const Text = styled.p`
    color: #ccc;
    margin-bottom: 20px;
`;


