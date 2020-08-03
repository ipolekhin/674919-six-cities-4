import React from "react";
import PropTypes from "prop-types";
import {renderFunctionType} from "../../types/types";

const PageContainer = (props) => {
  const {offersOfTown} = props;

  return (
    <React.Fragment>
      {
        offersOfTown.length && (
          props.renderContainer()
        ) || (
          <div>Загрузка данных</div>
        )
      }
    </React.Fragment>
  );
};

PageContainer.propTypes = {
  offersOfTown: PropTypes.array,
  renderContainer: renderFunctionType,
};

export default PageContainer;

