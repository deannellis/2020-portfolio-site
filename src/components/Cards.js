import React from 'react';
import styled from 'styled-components';

const CardsWrapper = styled.section`
    background: ${props => props.theme.offWhite};
`;

const Cards = () => {
    return (
        <CardsWrapper style={{ minHeight: '700px' }}>
            cards here
        </CardsWrapper>
    );
}
 
export default Cards;