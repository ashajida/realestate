import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Container } from '../../globalstyles';


export const Header = styled.header`
    background-color: #000; 
    padding: 20px 0;
    position: fixed;
    z-index: 9;
    width: 100%;
`;


export const Nav = styled.nav`
  
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    font-weight: 100;
    text-transform: uppercase;
    svg {
        margin-right: 10px;
    }
`;

export const NavBtn = styled.div`
    display: block;
    color: #fff;
    font-size: 2rem;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const NavContainer = styled(Container)`
    position: relative;
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    ${Container}
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 60px;
    padding: 10px 10px;
    font-size: 1.5rem;
    transition: color 0.3s;
    &:hover {
        color: #7158e2;
    }
    ${({logo}) => logo && 'margin-bottom: 0;'}
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        font-size: 1.1rem;
    }
`;



export const Links = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    left: ${({clickEvent}) => clickEvent ? '-100%' : '0'};
    background: #000;
    height: 100vh;
    padding: 0 6px;
    transition: all 0.3s;
    margin-top: 20px;
    text-align: center;
    padding-top: 60px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        height: auto;
        position: relative;
        left: 0;
        width: auto;
        text-align: inherit;
        padding: 0;
        position: inherit;
        margin: 0;
    };
`;
