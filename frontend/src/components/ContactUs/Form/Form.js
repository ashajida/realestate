import {
    FormSection,
    FormWrapper,
    InputWrapper,
    Input,
    Button,
    FormContainer,
    TextArea,
    FormHeading,
} from './FormElements';

const Form = () => {
    return(
        <FormSection>
            <FormContainer>
                <FormWrapper>
                    <FormHeading>Send us a message</FormHeading>
                    <InputWrapper>
                        <Input name="email" placeholder="Name" type="text"/>
                    </InputWrapper>
                    <InputWrapper>
                        <TextArea  placeholder="Message" />
                    </InputWrapper>
                    <Button>Submit</Button>
                </FormWrapper>
            </FormContainer>
        </FormSection>
    );
}

export default Form;
