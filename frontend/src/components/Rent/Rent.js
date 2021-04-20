import { RentSection, RentContainer, Heading } from "./RentElements";
import Properties from '../Property/Properties/Properties';

const Rent = ({propertiesObj}) => {

    return(
        <RentSection>
            <RentContainer>
                <Heading>Rent Properties</Heading>
                <Properties propertiesObj={propertiesObj} />
            </RentContainer>
        </RentSection> 
    );
}

export default Rent;