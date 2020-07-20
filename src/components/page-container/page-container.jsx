import React from "react";
import {renderFunctionType} from "../../types/types";

const PageContainer = (props) => {
  return (
    <React.Fragment>
      {props.renderContainer()}
    </React.Fragment>
  );
};

PageContainer.propTypes = {
  renderContainer: renderFunctionType,
};

export default PageContainer;

