import styled from 'styled-components';

export const Properties = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrapper: wrap;
    @media screen and (min-width: 769px) {
        flex-direction: row;
    }
    @media screen and (min-width: 900px) {
        flex-direction: row;
        // justify-content: space-between;
        flex-wrap: wrap;
        align-content: stretch;
    }
`;