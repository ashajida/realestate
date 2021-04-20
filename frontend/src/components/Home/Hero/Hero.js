import {HeroSection, Form, InputWrapper, Input, Button, FormContainer, Heading} from './HeroElements';
import {HeroObj} from './Data';
import {useState} from 'react';

const Hero = function() {

    const [value, setValue] = useState();

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log(e);
    }

    return(
        <HeroSection {...HeroObj}>
            <FormContainer>
                <Heading>Welcome to York Estate</Heading>
                <Form action="/search">
                    <InputWrapper>
                        <Input name="s" type="search" onChange={handleOnChange} placeholder="Search" value={value}/>
                    </InputWrapper>
                    <Button onSubmit={handleSubmit}>Submit</Button>
                </Form>
            </FormContainer>
        </HeroSection>
    );
}

export default Hero;