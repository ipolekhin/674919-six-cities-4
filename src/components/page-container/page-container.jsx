import React from "react";
import {childrenType} from "../../types/types";

const PageContainer = (props) => {
  const {children} = props;
  const getClass = () => {
    switch (window.document.location.pathname) {
      case `/`:
        return ` page--gray page--main`;
      default:
        return ``;
    }
  };

  return (
    <React.Fragment>
      <div className={`page${getClass()}`}>
        {children}
      </div>
    </React.Fragment>
  );
};

PageContainer.propTypes = {
  children: childrenType
};

export default PageContainer;

