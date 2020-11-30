// node modules
import React from "react";
import renderer from "react-test-renderer";

// internal imports 
import Carousel from "./index";

import { CAROUSEL_PANEL_DATA } from "../../constants";

it ('renders correctly with no items', () => {
  const tree = renderer.create(<Carousel />).toJSON();
  expect(tree).toMatchSnapshot();
})

it ('renders with data', () => {
  const data = CAROUSEL_PANEL_DATA;
  const tree = renderer.create(<Carousel data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
})

