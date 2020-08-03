import React from "react";

const withActiveItem = (Component) => {
  class WithActiveOffer extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null,
      };
      this.handleActiveItemChange = this.handleActiveItemChange.bind(this);
    }

    handleActiveItemChange(value) {
      // this.setState(() => ({offer: this.props.offersOfTown.find((card) => card.id === offerId)}));
      this.setState(() => (
        {
          activeItem: value,
        }
      ));
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem = {activeItem}
          onActiveItemChange= {this.handleActiveItemChange}
        />
      );
    }
  }

  return WithActiveOffer;
};

export default withActiveItem;
