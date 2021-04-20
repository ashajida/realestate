import { Fragment } from "react";
import {
    FooterSection,
    FooterContainer,
    Navigation,
    Socials,
    Icon, 
    NavLink,
    Form,
    InputWrapper,
    Input,
    Button,
    Heading,
    LogoSocialWrapper,
    Text,
    FooterLogo,
    NavHeading
} from '../Footer/FooterElements';
import {SiFacebook} from 'react-icons/si';
import {AiFillTwitterCircle} from 'react-icons/ai'; 
import {FiInstagram} from 'react-icons/fi'; 
import { GiFamilyHouse } from 'react-icons/gi'; 


const Footer = () => {
    return(
        <Fragment>
            <FooterSection>
                <FooterContainer>
                    <LogoSocialWrapper>
                        <FooterLogo>
                            <GiFamilyHouse/>York Estate
                        </FooterLogo>
                        <Text>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </Text>
                        <Socials>
                            <Icon><SiFacebook /></Icon>
                            <Icon><AiFillTwitterCircle /></Icon>
                            <Icon><FiInstagram /></Icon>
                        </Socials>
                    </LogoSocialWrapper>
                    <Navigation>
                        <NavHeading>Menu</NavHeading>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/rent">Rent</NavLink>
                        <NavLink to="/buy">Buy</NavLink>
                    </Navigation>
                    <Navigation>
                        <NavHeading>Information</NavHeading>
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="/">FAQ</NavLink>
                    </Navigation>
                    <Form>
                        <Heading>Subscribe Today</Heading>
                        <InputWrapper>
                            <Input placeholder="email" />
                        </InputWrapper>
                        <Button type="submit">Subscribe</Button>
                    </Form>
                </FooterContainer>
            </FooterSection>
        </Fragment>
    );
}

export default Footer;