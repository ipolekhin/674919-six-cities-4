import React from "react";
import renderer from "react-test-renderer";
import PageContainer from "./page-container.jsx";

it(`Render PageContainer`, () => {
  const tree = renderer
    .create(
        <PageContainer renderContainer = {() => (
          <div className="page page--gray page--main"></div>
        )} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
