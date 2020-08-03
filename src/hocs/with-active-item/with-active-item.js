import React from "react";

const withActiveItem = (Component) => {
  class WithActiveOffer extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null,
        blabla: null,
      };
      this.handleActiveItemChange = this.handleActiveItemChange.bind(this);
    }

    handleActiveItemChange(value) {
      console.log(`handleActiveItemChange`);
      console.log(value);
      // this.setState(() => ({offer: this.props.offersOfTown.find((card) => card.id === offerId)}));
      this.setState(() => (
        {
          activeItem: value,
          blabla: `321`,
        }
      ));
    }

    render() {
      const {activeItem, blabla} = this.state;

      return (
        <Component
          {...this.props}
          activeItem = {activeItem}
          blabla = {blabla}
          onActiveItemChange= {this.handleActiveItemChange}
        />
      );
    }
  }

  return WithActiveOffer;
};

export default withActiveItem;
