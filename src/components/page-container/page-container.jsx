import React from "react";

const PageContainer = (props) => {
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
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default PageContainer;
