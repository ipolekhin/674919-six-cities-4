import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSort from "./with-sort.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div />;
const MockComponentWrapped = withSort(MockComponent);

it(`Should menu state init, menu click open it and correct menu close`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().isOpen).toEqual(false);
  wrapper.props().handleClick();
  expect(wrapper.props().isOpen).toEqual(true);
  wrapper.props().handleClick();
  expect(wrapper.props().isOpen).toEqual(false);
});
