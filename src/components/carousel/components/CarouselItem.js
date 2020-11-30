// node modules
import React from "react";
import styled from "styled-components"
import PropTypes from "proptypes";

const StyledContainer = styled.div`
  min-width: ${props => `calc(100vw / ${props.length})`};
  height: ${props => `calc(100vw / ${props.length})`};
  margin-right: 10px;
  transform: ${props => {
    const xCalc = props.isStatic ? 0 : (props.slidePosition * 100)
    return `translateX(${xCalc}%);`
  }}
  transition: transform 0.3s ease-in;
  background: #f9f9f9;
`

const CarouselContent= styled.div`
  display: flex; 
  justify-content: center;
  font-size: 4em;
  color: grey;
  align-items: center;
  height: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px -3px rgba(0,0,0,0.8);
}
`

const CarouselItem = ({slidePosition, label, length, isStatic}) => {
  return <StyledContainer isStatic={isStatic} slidePosition={slidePosition} length={length} >
    <CarouselContent>
      {label}
    </CarouselContent>
  </StyledContainer>
};

CarouselItem.propTypes = {
  slidePosition: PropTypes.number,
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  length: PropTypes.number,
  isStatic: PropTypes.bool
}


export default CarouselItem;