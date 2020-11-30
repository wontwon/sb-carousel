// node modules
import React, { useState } from "react";
import PropTypes from "proptypes";
import styled from "styled-components";
import shortid from "shortid"; // internal imports

import { CarouselItem, CarouselNav } from "./components";
import { CAROUSEL_PANEL_DATA } from "../../constants";
const StyledContainer = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
  height: 500px;
  width: 100%;
  background: #f9f9f9;
  position: relative;
  padding-left: ${props => `calc(100vw / ${props.length}`})
`;
const AnimationContainer = styled.div`
  flex-direction: row;
  align-items: center;
  display: ${props => props.animating ? 'flex' : 'none'};
`;
const StaticContainer = styled.div`
  flex-direction: row;
  align-items: center;
  display: ${props => props.animating ? 'none' : 'flex'};
`;

const Carousel = props => {
  const {
    infinite,
    data
  } = props; // state

  const [slidePosition, setSlidePosition] = useState(0);
  const [animationPanels, setAnimationPanels] = useState(data);
  const [staticPanels, setStaticPanels] = useState(data);
  const [animating, toggleAnimating] = useState(false);

  const handleLeftNavClick = () => {
    if (!infinite && slidePosition === 0) return;
    setSlidePosition(-1);
    setAnimationPanels(s => {
      let firstVal = s[0].value;
      const newEl = {
        id: shortid.generate(),
        value: firstVal === 1 ? 4 : firstVal -= 1
      };
      const updateArr = [newEl, ...s];
      return updateArr;
    });
    toggleAnimating(true);
    setTimeout(() => {
      setSlidePosition(0);
    }, 250);
    setTimeout(() => {
      setStaticPanels(s => {
        const staticPanelCopy = Object.assign([], s);
        const lastEl = staticPanelCopy.pop();
        const updatedPanels = [lastEl, ...staticPanelCopy];
        return updatedPanels;
      });
      toggleAnimating(false);
      setSlidePosition(-1);
      setAnimationPanels(s => {
        const animationPanels = Object.assign([], s);
        animationPanels.pop();
        return animationPanels;
      });
    }, 600);
  };

  const handleRightNavClick = () => {
    setSlidePosition(0);
    if (!infinite && slidePosition === (data.length - (data.length - 1)) * -1) return;
    toggleAnimating(true);
    setTimeout(() => {
      setSlidePosition(-1);
      setAnimationPanels(s => {
        let lastVal = s[s.length - 1].value;
        const newEl = {
          id: shortid.generate(),
          value: lastVal === 4 ? 1 : lastVal += 1
        };
        const updateArr = [...s, newEl];
        return updateArr;
      });
    }, 250);
    setTimeout(() => {
      setStaticPanels(s => {
        const staticPanelCopy = Object.assign([], s);
        const firstEl = staticPanelCopy.shift();
        const updatedPanels = [...staticPanelCopy, firstEl];
        return updatedPanels;
      });
      toggleAnimating(false);
      setAnimationPanels(s => {
        const animationPanels = Object.assign([], s);
        animationPanels.shift();
        return animationPanels;
      });
      setSlidePosition(0);
    }, 600);
  };

  const renderAnimatedPanels = () => {
    const dataSource = infinite ? animationPanels : data;
    return dataSource.map(({
      value,
      id
    }) => {
      return /*#__PURE__*/React.createElement(CarouselItem, {
        key: id,
        label: value,
        slidePosition: slidePosition,
        length: data.length
      });
    });
  };

  const renderStaticPanels = () => {
    const dataSource = infinite ? staticPanels : data;
    return dataSource.map(({
      value,
      id
    }) => {
      return /*#__PURE__*/React.createElement(CarouselItem, {
        isStatic: true,
        key: id,
        label: value,
        length: data.length
      });
    });
  };

  return /*#__PURE__*/React.createElement(StyledContainer, {
    length: data.length
  }, /*#__PURE__*/React.createElement(CarouselNav, {
    length: data.length,
    handleLeftNavClick: handleLeftNavClick,
    handleRightNavClick: handleRightNavClick
  }), /*#__PURE__*/React.createElement(AnimationContainer, {
    animating: animating
  }, renderAnimatedPanels()), /*#__PURE__*/React.createElement(StaticContainer, {
    animating: animating
  }, renderStaticPanels()));
};

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  infinite: PropTypes.bool
};
Carousel.defaultProps = {
  data: CAROUSEL_PANEL_DATA,
  infinite: true
};
export default Carousel;