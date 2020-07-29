import React from "react";

const withActiveOffer = (Component) => {
  class WithActiveOffer extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {offerId: null};
      this.handleTitleClick = this.handleTitleClick.bind(this);
    }

    handleTitleClick(offerId) {
      // this.setState(() => ({offer: this.props.offersOfTown.find((card) => card.id === offerId)}));
      this.setState(() => ({offerId}));
    }

    render() {
      const {offerId} = this.state;

      return (
        <Component
          {...this.props}
          onTitleClick = {this.handleTitleClick}
          offerId = {offerId}
        />
      );
    }
  }

  return WithActiveOffer;
};

export default withActiveOffer;
