import React from "react";
import {valid} from "../../const.js";

const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        review: ``,
        rating: 0,
        isActive: false,
      };
      this.handleReviewFormChange = this.handleReviewFormChange.bind(this);
    }

    validateForm() {
      const {rating, review} = this.state;
      // console.log(+rating);
      // console.log(review);

      const reviewIsValid = review.length >= valid.MIN_LENGTH_REVIEW && review.length <= valid.MAX_LENGTH_REVIEW;
      const isActive = reviewIsValid && rating > 0;
      // console.log(review.length);
      // console.log(reviewIsValid);
      // console.log(isActive);

      this.setState(() => ({isActive}));
    }

    validateTextarea(event) {
      if (event.target.validity.tooShort || event.target.validity.tooLong) {
        event.target.setCustomValidity(valid.TEXT_WRONG);
      } else {
        event.target.setCustomValidity(``);
      }
    }

    handleReviewFormChange(event) {
      const {name, value} = event.target;
      // console.log(`handleReviewFormChange`);
      // console.log(value.length);
      // console.log(event.target.name);
      // this.setState(() => ({[event.target.name]: event.target.value}));
      this.setState(() => ({[name]: value}));
      setTimeout(() => {
        this.validateForm();
      }, 500);
      this.validateTextarea(event);
    }

    render() {
      const {isActive, rating, review} = this.state;

      return (
        <Component
          {...this.props}
          onReviewFormChange={this.handleReviewFormChange}
          isActive={isActive}
          rating={+rating}
          comment={review}
        />
      );
    }
  }

  return WithReviewForm;
};

export default withReviewForm;
