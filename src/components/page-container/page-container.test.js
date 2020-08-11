import React from "react";
import renderer from "react-test-renderer";
import PageContainer from "./page-container.jsx";

const offersOfTown = [`Amsterdam`, `Paris`];

describe(`PageContainer Test`, () => {
  it(`Render PageContainer`, () => {
    const tree = renderer
      .create(
          <PageContainer
            offersOfTown = {offersOfTown}
            renderContainer={() => (
              <div className="page page--gray page--main"></div>
            )}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
