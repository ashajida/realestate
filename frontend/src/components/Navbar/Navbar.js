import {Header, Nav, Links, NavLink, NavBtn, Logo, LogoWrapper, NavContainer } from './NavbarElements';
import {NavLink as Link} from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { GiFamilyHouse } from 'react-icons/gi'; 
import {useState} from 'react';

const Navbar = function() {

    const [click, setClick] = useState(true);

    const handleClick = function() {
        setClick(!click);
    }

    const handleClickLogo = function() {
        if(!click) {
            setClick(!click);
        }
    }

    return(
        <Header>
            <Nav>
                <NavContainer>
                    <LogoWrapper>
                        <NavLink onClick={handleClickLogo} to="/" logo>
                            <Logo>
                                <GiFamilyHouse />
                                York Estate
                            </Logo>
                        </NavLink>
                        <NavBtn onClick={handleClick}>
                            {click ? <FiMenu /> : <FiX />}
                        </NavBtn>
                    </LogoWrapper>
                    <Links clickEvent={click}>
                        <NavLink onClick={handleClick} to="/">Home</NavLink >
                        <NavLink onClick={handleClick} to="/buy">Buy</NavLink>
                        <NavLink  onClick={handleClick} to="/rent">Rent</NavLink >
                        <NavLink  onClick={handleClick} to="/contact">Contact Us</NavLink >
                    </Links>
                </NavContainer>
            </Nav>
        </Header>
    );
}

export default Navbar;