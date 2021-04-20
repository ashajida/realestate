
import {Fragment} from 'react';
import {
    WhyChooseUsSection,
    WhyChooseUsContainer,
    ImageWrapper,
    WhyChooseUsImage,
    Heading,
    Description,
    Text,
    Btn
} from './WhyChooseUsElements';


const WhyChooseUs = ({
    headingOne,
    image,
    buttonLink,
    buttonText,
    content,
    ContentWrapper
}) => {
    return(
        <Fragment>
            <WhyChooseUsSection>
                <WhyChooseUsContainer>
                        <ImageWrapper>
                            <WhyChooseUsImage src={image} />
                        </ImageWrapper>
                        <Description>
                            <Heading>{headingOne}</Heading>
                            <Text>{content}</Text>
                            <Btn to={buttonLink}>{buttonText}</Btn>
                        </Description>
                </WhyChooseUsContainer>
            </WhyChooseUsSection>
        </Fragment>
    );
}

export default WhyChooseUs;