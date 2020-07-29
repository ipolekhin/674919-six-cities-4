import React from "react";

const withSort = (Component) => {
  class WithSort extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {isOpen: false};
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(() => ({isOpen: !this.state.isOpen}));
    }

    render() {
      const {isOpen} = this.state;

      return (
        <Component
          {...this.props}
          handleClick = {this.handleClick}
          isOpen = {isOpen}
        />
      );
    }
  }

  return WithSort;
};

export default withSort;
