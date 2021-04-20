import {
    Heading,
    PopularLocationsContainer,
    PopularLocationsSection,
    PopularLocation,
    PopularLocationsWrapper,
    Image,
    LocationName,
    DescriptionWrapper,
    PropertyCount
} from './PopularLocationElements';

import {GiHouse} from 'react-icons/gi'; 
import {FaHotel} from 'react-icons/fa';

const PopularLocations = ({locations}) => {
    return(
        <PopularLocationsSection>
            <PopularLocationsContainer>
                <Heading>Popular Locations</Heading>
                <PopularLocationsWrapper>
                    {
                        locations.map((location) => {
                            if(location.is_featured) {
                                return(
                                    <PopularLocation key={location.id} big={(location.id == 5) ? true : false}>
                                        <Image src={location.image}/>
                                        <DescriptionWrapper>
                                            <LocationName to={`/locations/${location.id}`}>{location.name}</LocationName>
                                            <PropertyCount>{location.count} Properties</PropertyCount>
                                        </DescriptionWrapper>
                                    </PopularLocation>
                                )
                            }
                        })
                    }
                </PopularLocationsWrapper>
            </PopularLocationsContainer>
        </PopularLocationsSection>
    );
}

export default PopularLocations;