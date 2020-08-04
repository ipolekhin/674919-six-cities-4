import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSort from "./with-active-item.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div />;
const MockComponentWrapped = withSort(MockComponent);

describe(`withActiveItem HOC Test`, () => {
  it(`Should handleActiveItemChange`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    expect(wrapper.props().activeItem).toEqual(null);
    wrapper.props().onActiveItemChange(1);
    expect(wrapper.props().activeItem).toEqual(1);
  });
});
