// node modules
import React from "react";
import styled from "styled-components";
import PropTypes from "proptypes";
import { IconButton } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

const StyledContainer = styled.div`
  padding: 25px;
  font-size: 30px;
`

const CarouselNavBtn = ({isRight, handleNavClick}) => {
  const btnIcon = isRight ? <ChevronRight /> : <ChevronLeft />;

  const handleClick = () => handleNavClick();

  return <StyledContainer>
    <IconButton onClick={handleClick}>{btnIcon}</IconButton>
  </StyledContainer>
}

CarouselNavBtn.propTypes = {
  isRight: PropTypes.bool,
  handleNavClick: PropTypes.func
};

export default CarouselNavBtn