// node modules
import React from "react";
import styled from "styled-components";
import PropTypes from "proptypes";

// internal imports 
import CarouselNavBtn from "./CarouselNavBtn";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.isRight ? 'flex-start' : 'flex-end'};
  height: 100%;
  width: ${props => `calc(90vw / ${props.length}`});
  background: #f9f9f9;
  z-index: 100;
`;

const CarouselNavPanel = (props) => {
  return <StyledContainer isRight={props.isRight} length={props.length} >
    <CarouselNavBtn {...props} />
  </StyledContainer>
};

CarouselNavPanel.propTypes = {
  isRight: PropTypes.bool,
  length: PropTypes.number
}

export default CarouselNavPanel