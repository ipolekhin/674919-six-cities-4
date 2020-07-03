import React from "react";
import renderer from "react-test-renderer";
import PageContainer from "./page-container.jsx";

const children = <div className="children-component" />;

it(`Render PageContainer`, () => {
  const tree = renderer
    .create(
        <PageContainer>
          {children}
        </PageContainer>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
