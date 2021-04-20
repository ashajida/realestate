import { BuySection, BuyContainer, Heading } from "./BuyElements";
import Properties from '../Property/Properties/Properties';

const Buy = ({propertiesObj}) => {
    return(
        <BuySection>
            <BuyContainer>
                <Heading>Buy Properties</Heading>
                <Properties propertiesObj={propertiesObj} />
            </BuyContainer>
        </BuySection> 
    );
}

export default Buy; 