// node modules
import React from "react";
import styled from "styled-components";
import PropTypes from "proptypes";
import { IconButton } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
const StyledContainer = styled.div`
  padding: 25px;
  font-size: 30px;
`;

const CarouselNavBtn = ({
  isRight,
  handleNavClick
}) => {
  const btnIcon = isRight ? /*#__PURE__*/React.createElement(ChevronRight, null) : /*#__PURE__*/React.createElement(ChevronLeft, null);

  const handleClick = () => handleNavClick();

  return /*#__PURE__*/React.createElement(StyledContainer, null, /*#__PURE__*/React.createElement(IconButton, {
    onClick: handleClick
  }, btnIcon));
};

CarouselNavBtn.propTypes = {
  isRight: PropTypes.bool,
  handleNavClick: PropTypes.func
};
export default CarouselNavBtn;