import React from "react";
import {valid, errorMessageList} from "../../const.js";
import {functionType, isNumberType} from "../../types/types.js";

const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        review: ``,
        rating: 0,
        messageError: ``,
      };
      this.handleReviewFormChange = this.handleReviewFormChange.bind(this);
      this.handleReviewFormSubmit = this.handleReviewFormSubmit.bind(this);
      this.resetState = this.resetState.bind(this);
    }

    validateForm() {
      const {rating, review} = this.state;
      const reviewIsValid = review.length >= valid.MIN_LENGTH_REVIEW && review.length <= valid.MAX_LENGTH_REVIEW;
      const isActive = reviewIsValid && rating > 0;

      return isActive;
    }

    resetState() {
      this.setState({
        review: ``,
        rating: 0,
      });
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
      this.setState(() => ({[name]: value}));

      this.validateTextarea(event);
    }

    handleReviewFormSubmit(event) {
      event.preventDefault();
      const {offerId, onSubmitReview} = this.props;
      const {rating, review} = this.state;

      onSubmitReview(offerId, {rating, comment: review})
        .then(() => {
          this.resetState();
        })
        .catch((err) => {
          if (err.response) {
            const statusError = errorMessageList[err.response.status];
            this.setState(() => ({messageError: statusError ? statusError : err.response.statusText}));
          } else {
            this.setState(() => ({messageError: errorMessageList[err.request.status]}));
          }

          throw err;
        });
    }

    render() {
      const {messageError, rating, review} = this.state;

      return (
        <Component
          {...this.props}
          onReviewFormChange={this.handleReviewFormChange}
          onReviewFormSubmit={this.handleReviewFormSubmit}
          messageError={messageError}
          isActive={this.validateForm()}
          rating={+rating}
          comment={review}
        />
      );
    }
  }

  WithReviewForm.propTypes = {
    offerId: isNumberType,
    onSubmitReview: functionType,
  };

  return WithReviewForm;
};

export default withReviewForm;
