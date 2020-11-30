// node modules
import React from "react";
import styled from "styled-components";
import PropTypes from "proptypes"; // internal imports

import CarouselNavPanel from "./CarouselNavPanel";
const StyledContainer = styled.div`
 position: absolute;
 display: flex;
 left: 0;
 width: 100%;
 height: 100vh;
 justify-content: space-between;
`;

const CarouselNav = ({
  handleLeftNavClick,
  handleRightNavClick,
  length
}) => {
  return /*#__PURE__*/React.createElement(StyledContainer, null, /*#__PURE__*/React.createElement(CarouselNavPanel, {
    handleNavClick: handleLeftNavClick,
    length: length
  }), /*#__PURE__*/React.createElement(CarouselNavPanel, {
    handleNavClick: handleRightNavClick,
    length: length,
    isRight: true
  }));
};

CarouselNav.propTypes = {
  handleLeftNavClick: PropTypes.func,
  handleRightNavClick: PropTypes.func,
  length: PropTypes.number
};
export default CarouselNav;